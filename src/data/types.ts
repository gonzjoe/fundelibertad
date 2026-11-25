/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Donation {
  id: string;
  orderId?: string;
  amount: number;
  currency: string;
  email: string;
  name: string;
  phone?: string;
  country?: string;
  city?: string;
  message?: string;
  receiveNews?: boolean;
  date: string;
  type: 'one-time' | 'recurring';
  paymentMethod: 'credit_card' | 'bank_transfer';
  status: 'completed' | 'pending' | 'denied' | 'refunded';
  ip?: string;
}

export interface DonationStats {
  totalRaised: number;
  goal: number;
  totalDonationsCount: number;
  averageDonation: number;
  recentDonors: Donation[];
  monthlyData: { month: string; amount: number; count: number }[];
  annualData: { year: string; amount: number; count: number }[];
}

export interface DonationFilter {
  searchQuery?: string;
  frequency?: 'all' | 'one-time' | 'recurring';
  paymentMethod?: 'all' | 'bank_transfer' | 'credit_card';
  status?: 'all' | 'completed' | 'pending' | 'denied' | 'refunded';
  startDate?: string;
  endDate?: string;
}

export interface InternshipApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  university: string;
  career: string;
  semester: string;
  motivation: string;
  date: string;
  status: 'pending' | 'reviewed' | 'approved';
}

export interface HumanRightsReport {
  id: string;
  reporterName: string; // "Anónimo" if confidential is selected
  email: string;
  phone: string;
  subject: string;
  location: string;
  description: string;
  isConfidential: boolean;
  date: string;
  status: 'received' | 'investigating' | 'processed';
}

export interface LegalConsultation {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  category: string;
  description: string;
  date: string;
  status: 'pending' | 'scheduled' | 'resolved';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export interface Activity {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  date: string;
  image: string;
  gallery: string[];
  type: 'event' | 'workshop' | 'conference' | 'campaign' | 'news';
  videoUrl?: string;
  author?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  iconName: string;
  longDescription: string;
  impactMetrics?: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  category: 'human-rights' | 'legal' | 'social' | 'academic';
  description: string;
  details: string[];
  iconName: string;
}
