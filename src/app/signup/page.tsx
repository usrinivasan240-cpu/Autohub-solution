'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

type SignupData = z.infer<typeof signupSchema>;

const plans = [
  { id: 'basic', name: 'Basic', price: 2999 },
  { id: 'pro', name: 'Pro', price: 7999 },
  { id: 'enterprise', name: 'Enterprise', price: 24999 },
];

export default function SignupPage() {
  const params = useParams();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const selectedPlan = params?.plan as string || 'basic';
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSuccess(true);
    setIsSubmitting(false);
    
    // Redirect to dashboard after success
    setTimeout(() => {
      router.push('/admin/dashboard');
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">Welcome to AutoHub!</h2>
          <p className="text-secondary-600 mb-8">
            Your account has been created successfully. Redirecting to dashboard...
          </p>
          <div className="animate-pulse">
            <div className="h-2 bg-secondary-200 rounded-full max-w-xs mx-auto">
              <div className="h-2 bg-primary-500 rounded-full max-w-xs animate-progress" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <span className="font-heading font-bold text-2xl text-secondary-900">
              AutoHub<span className="text-primary-500">.</span>
            </span>
          </Link>
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">Create Your Account</h1>
          <p className="text-secondary-600">Start your 14-day free trial today</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Signup Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="label">Full Name *</label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="input-field"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="label">Email Address *</label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      placeholder="john@company.com"
                      className="input-field"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="label">Phone Number *</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      placeholder="+91-XXXXX-XXXXX"
                      className="input-field"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="label">Password *</label>
                    <input
                      {...register('password')}
                      type="password"
                      id="password"
                      placeholder="Create a password"
                      className="input-field"
                    />
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                    )}
                  </div>
                </div>
                
                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirmPassword" className="label">Confirm Password *</label>
                  <input
                    {...register('confirmPassword')}
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    className="input-field"
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
                  )}
                </div>
                
                {/* Terms */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-primary-500 border-secondary-300 rounded focus:ring-primary-500 mt-1"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-secondary-600">
                    I agree to the{' '}
                    <Link href="/terms" className="text-primary-500 hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-primary-500 hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? (
                    'Creating Account...'
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Plan Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Plan Summary</h3>
              
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`p-4 rounded-xl border-2 mb-4 ${
                    selectedPlan === plan.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-secondary-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-secondary-900">{plan.name}</span>
                    {selectedPlan === plan.id && (
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                    )}
                  </div>
                  <div className="text-2xl font-bold text-secondary-900">
                    ₹{plan.price.toLocaleString()}
                    <span className="text-sm font-normal text-secondary-500">/month</span>
                  </div>
                </div>
              ))}
              
              <div className="space-y-3 mt-6 pt-6 border-t border-secondary-200">
                <div className="flex items-center text-sm text-secondary-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  14-day free trial
                </div>
                <div className="flex items-center text-sm text-secondary-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center text-sm text-secondary-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
