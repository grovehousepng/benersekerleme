'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send, Loader2 } from 'lucide-react';
import { GoldButton } from './GoldButton';

const phoneRegex = /^(\+90|0)?\s*5\d{2}\s*\d{3}\s*\d{2}\s*\d{2}$/;

const contactSchema = z.object({
  fullName: z.string().min(3, { message: 'Ad Soyad en az 3 karakter olmalıdır.' }),
  phone: z.string().regex(phoneRegex, { message: 'Geçerli bir cep telefonu giriniz (Örn: 0555 997 72 81).' }),
  email: z.string().email({ message: 'Geçerli bir e-posta adresi giriniz.' }).optional().or(z.literal('')),
  subject: z.string().min(1, { message: 'Lütfen bir konu seçiniz.' }),
  message: z.string().min(10, { message: 'Mesajınız en az 10 karakter olmalıdır.' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Create mailto link as requested in the workflow
    const mailtoSubject = encodeURIComponent(`Bener Şekerleme Web Formu: ${data.subject}`);
    const mailtoBody = encodeURIComponent(
      `Gönderen: ${data.fullName}\nTelefon: ${data.phone}\nE-posta: ${data.email || 'Belirtilmedi'}\n\nMesaj:\n${data.message}`
    );
    
    // Trigger mailto link in the background
    const mailtoUrl = `mailto:info@benersekerleme.com.tr?subject=${mailtoSubject}&body=${mailtoBody}`;
    window.location.href = mailtoUrl;

    setIsLoading(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="bg-cream-warm border border-border p-8 md:p-10 shadow-sm relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
            noValidate
          >
            <div>
              <label htmlFor="fullName" className="label text-text-secondary block mb-2 font-medium">
                Ad Soyad *
              </label>
              <input
                type="text"
                id="fullName"
                {...register('fullName')}
                className={`w-full bg-cream border p-3 font-body text-sm rounded-none focus:outline-none transition-all duration-300 ${
                  errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-gold focus:ring-1 focus:ring-gold'
                }`}
                placeholder="Örn: Ahmet Yılmaz"
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 mt-1 font-body">{errors.fullName.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="label text-text-secondary block mb-2 font-medium">
                  Telefon Numarası *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className={`w-full bg-cream border p-3 font-body text-sm rounded-none focus:outline-none transition-all duration-300 ${
                    errors.phone ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-gold focus:ring-1 focus:ring-gold'
                  }`}
                  placeholder="Örn: 0555 997 72 81"
                />
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1 font-body">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="label text-text-secondary block mb-2 font-medium">
                  E-Posta Adresi
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className={`w-full bg-cream border p-3 font-body text-sm rounded-none focus:outline-none transition-all duration-300 ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-gold focus:ring-1 focus:ring-gold'
                  }`}
                  placeholder="Örn: info@benersekerleme.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1 font-body">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="label text-text-secondary block mb-2 font-medium">
                Konu *
              </label>
              <select
                id="subject"
                {...register('subject')}
                className={`w-full bg-cream border p-3 font-body text-sm rounded-none focus:outline-none transition-all duration-300 ${
                  errors.subject ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-gold focus:ring-1 focus:ring-gold'
                }`}
              >
                <option value="">Seçiniz</option>
                <option value="Bayilik">Bayilik Başvurusu</option>
                <option value="Toplu Sipariş">Toplu Sipariş Talebi</option>
                <option value="Genel Görüşler">Genel Görüş & Öneri</option>
              </select>
              {errors.subject && (
                <p className="text-xs text-red-600 mt-1 font-body">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="label text-text-secondary block mb-2 font-medium">
                Mesajınız *
              </label>
              <textarea
                id="message"
                rows={5}
                {...register('message')}
                className={`w-full bg-cream border p-3 font-body text-sm rounded-none focus:outline-none transition-all duration-300 ${
                  errors.message ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-gold focus:ring-1 focus:ring-gold'
                }`}
                placeholder="Mesajınızı buraya yazınız..."
              />
              {errors.message && (
                <p className="text-xs text-red-600 mt-1 font-body">{errors.message.message}</p>
              )}
            </div>

            <GoldButton
              type="submit"
              variant="solid"
              className="w-full flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin h-4 w-4 text-dark" />
                  Gönderiliyor...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Mesajı Gönder
                </>
              )}
            </GoldButton>
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center text-center py-12"
          >
            <div className="h-16 w-16 bg-gold text-dark flex items-center justify-center rounded-none mb-6">
              <Check className="h-8 w-8 stroke-[3]" />
            </div>
            <h3 className="heading text-text-primary mb-3 font-bold">Mesajınız Alındı</h3>
            <p className="body-normal text-text-secondary max-w-sm mb-8">
              Mesajınız başarıyla gönderildi. Talebinize istinaden en kısa sürede sizinle iletişime geçeceğiz.
            </p>
            <GoldButton variant="outline" onClick={() => setIsSubmitted(false)}>
              Yeni Mesaj Gönder
            </GoldButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
