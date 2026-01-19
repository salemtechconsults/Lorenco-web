
import React from 'react';
import { Product, Testimonial, Bundle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'seat-cushion',
    name: 'Ergonomic Seat Cushion',
    title: 'Where Comfort Meets Support – Ergonomic Seat Cushion for Remote Professionals',
    price: 39.99,
    oldPrice: 49.99,
    category: 'Support While You Sit',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800',
    description: 'Designed for modern workdays, this popular ergonomic seat cushion brings effortless comfort to any chair. Simple, functional, and made for everyday use.',
    benefits: [
      'Ergonomic support – Encourages a more natural sitting position',
      'Memory foam comfort – Gently contours to your hips and thighs',
      'Spacious seating surface – Designed for freedom of movement',
      'Non-slip base – Stays securely in place',
      'Easy-care cover – Removable and machine-washable'
    ]
  },
  {
    id: 'knee-brace',
    name: 'Infrared Heated Knee Brace',
    title: 'Infrared Heated Knee Brace Wrap for Joint Relief and Circulation Support',
    price: 54.99,
    oldPrice: 69.99,
    category: 'Relief & Recovery for Joints',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800',
    description: 'Bring soothing warmth and gentle support to your knees. Perfect for recovery, relaxation, or daily activity at home.',
    benefits: [
      'Adjustable heat levels – Three levels of personalized warmth',
      'Infrared therapy – Promotes circulation and relieves stiffness',
      'Versatile fit – Adjustable straps for any body shape',
      'USB-powered – Convenient home or office use',
      'High-quality safety – Durable neoprene with automatic shut-off'
    ]
  },
  {
    id: 'posture-corrector',
    name: 'Magnetic Posture Corrector',
    title: 'Magnetic Posture Corrector Brace for Back Support and Alignment',
    price: 34.99,
    oldPrice: 44.99,
    category: 'Relief & Recovery for Joints',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=800',
    description: 'Improve your posture effortlessly. Supports your back and shoulders while gently reminding you to stand upright.',
    benefits: [
      'Ergonomic support – Encourages proper spinal alignment',
      'Magnetic therapy – Subtle support to back muscles',
      'Adjustable straps – Fits any body shape comfortably',
      'Lightweight and discreet – Wear under clothing',
      'Durable material – Long-lasting daily use'
    ]
  },
  {
    id: 'breathing-strips',
    name: 'Anti-Snoring Nasal Strips',
    title: 'Anti-Snoring Nasal Breathing Strips for Restful Sleep',
    price: 19.99,
    oldPrice: 24.99,
    category: 'Rest & Recovery Essentials',
    image: 'https://images.unsplash.com/photo-1541480601022-2308c0f02487?auto=format&fit=crop&q=80&w=800',
    description: 'Experience more peaceful nights. Helps improve airflow and promote better breathing while you sleep.',
    benefits: [
      'Enhanced airflow – Opens nasal passages effectively',
      'Magnetic support – Gentle stimulation for comfort',
      'Comfortable fit – Soft, flexible strips stay in place',
      'Easy to use – Simple application',
      'Safe & reusable – Hypoallergenic materials'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sophia',
    location: 'New York',
    text: 'Finally a knee wrap that actually helps me relax after work! The heat is so soothing.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael',
    location: 'Chicago',
    text: 'The seat cushion transformed my home office setup. No more back ache after 8 hours.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emma',
    location: 'Austin',
    text: 'These nasal strips are a game changer for my sleep quality. Highly recommend!',
    rating: 4
  }
];

export const BUNDLES: Bundle[] = [
  {
    id: 'work-from-home-set',
    name: 'Work-Life Support Bundle',
    products: ['seat-cushion', 'posture-corrector'],
    price: 59.99,
    discount: 'Save 20%'
  },
  {
    id: 'nightly-recovery-set',
    name: 'Deep Recovery Duo',
    products: ['knee-brace', 'breathing-strips'],
    price: 64.99,
    discount: 'Save 15%'
  }
];

export const Icons = {
  Truck: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  // Fix: Added optional key to prop type to prevent TS error when component is used in mapped lists
  Star: ({ filled }: { filled?: boolean; key?: React.Key }) => (
    <svg className={`w-4 h-4 ${filled ? 'text-mutedgold fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Support: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  ArrowRight: () => (
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
};
