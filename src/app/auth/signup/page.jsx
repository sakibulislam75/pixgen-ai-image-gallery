'use client';
import { Check } from '@gravity-ui/icons';
import {
   Button,
   Card,
   Description,
   FieldError,
   Form,
   Input,
   Label,
   TextField,
} from '@heroui/react';

export default function SignUpPage() {
   const onSubmit = async (e) => {
      e.preventDefault();
   };

   return (
      <Card className="border mx-auto w-125 py-10 mt-22">
         <h1 className="text-center text-2xl font-bold">Sign Up</h1>

         <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
            <TextField isRequired name="name" type="text">
               <Label>Name</Label>
               <Input placeholder="Enter your name" />
               <FieldError />
            </TextField>

            <TextField isRequired name="image" type="text">
               <Label>Image URL</Label>
               <Input placeholder="Image URL" />
               <FieldError />
            </TextField>

            <TextField
               isRequired
               name="email"
               type="email"
               validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                     return 'Please enter a valid email address';
                  }

                  return null;
               }}
            >
               <Label>Email</Label>
               <Input placeholder="john@example.com" />
               <FieldError />
            </TextField>

            <TextField
               isRequired
               minLength={8}
               name="password"
               type="password"
               validate={(value) => {
                  if (value.length < 8) {
                     return 'Password must be at least 8 characters';
                  }
                  if (!/[A-Z]/.test(value)) {
                     return 'Password must contain at least one uppercase letter';
                  }
                  if (!/[0-9]/.test(value)) {
                     return 'Password must contain at least one number';
                  }

                  return null;
               }}
            >
               <Label>Password</Label>
               <Input placeholder="Enter your password" />
               <Description>
                  Must be at least 8 characters with 1 uppercase and 1 number
               </Description>
               <FieldError />
            </TextField>

            <div className="flex gap-2">
               <Button type="submit">
                  <Check />
                  Submit
               </Button>
               <Button type="reset" variant="secondary">
                  Reset
               </Button>
            </div>
         </Form>
      </Card>
   );
}
