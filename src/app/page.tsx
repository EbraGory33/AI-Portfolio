'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  Laugh,
  Layers,
  PartyPopper,
  SquareUserRound,
  UserRoundSearch,
} from 'lucide-react';

/* ---------- quick-question data ---------- */
const questions = {
  Me: 'Who are you? Tell me a bit about yourself.',
  Projects: 'What projects have you built? What are you working on right now?',
  Skills: 'What are your skills? Share your technical and soft skills.',
  Background: 'What’s your experience and education? Walk me through your background.',
  Resume: 'Can you show me your resume or CV?',
  Fun: 'What’s something fun or interesting about you? What are your hobbies?',
  Contact: 'How can I contact you?',
} as const;
const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Resume', color: '#132066', icon: FileText },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Background', color: '#4A6FA5', icon: SquareUserRound },
  { key: 'Fun', color: '#B95F9D', icon: PartyPopper },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
] as const;

export default function Home() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  return <div className="">Home</div>;
}
