import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useDonation } from '@/contexts/DonationContext';
import { Donation } from '@/types';
import { useNavigate } from 'react-router-dom';

const formSchema = z.object({
  foodType: z.string().min(1, { message: 'Please select food type' }),
  quantity: z.string().min(1, { message: 'Please enter quantity' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters' }),
  location: z.string().min(5, { message: 'Please enter pickup location' }),
  pickupDate: z.date({ required_error: 'Please select a date' }),
  pickupTime: z.string().min(1, { message: 'Please select pickup time' }),
});

type FormValues = z.infer<typeof formSchema>;

const foodTypes = [
  'Cooked Food',
  'Vegetables',
  'Fruits',
  'Bread',
  'Dairy',
  'Grains',
  'Other',
];

const DonationForm = () => {
  const { createDonation } = useDonation();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodType: '',
      quantity: '',
      description: '',
      location: '',
      pickupTime: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    const { pickupDate, pickupTime, ...rest } = data;
    
    // Combine date and time into ISO string
    const [hours, minutes] = pickupTime.split(':');
    const pickupDateTime = new Date(pickupDate);
    pickupDateTime.setHours(parseInt(hours, 10), parseInt(minutes, 10));
    
    const donationData = {
      foodType: rest.foodType,
      quantity: rest.quantity,
      description: rest.description,
      location: rest.location,
      pickupTime: pickupDateTime.toISOString(),
    } as Omit<Donation, 'id' | 'donorId' | 'donorName' | 'status' | 'createdAt'>;
    
    await createDonation(donationData);
    navigate('/donor-dashboard');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="foodType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Food Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select food type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {foodTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 5 kg, 10 boxes" {...field} />
                  </FormControl>
                  <FormDescription>
                    Provide approximate weight or count
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Provide details about the food items"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup Location</FormLabel>
                <FormControl>
                  <Input placeholder="Full address for pickup" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="pickupDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Pickup Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pickupTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pickup Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-wastenot-green hover:bg-wastenot-darkgreen"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? 'Creating...' : 'Create Donation'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default DonationForm;
