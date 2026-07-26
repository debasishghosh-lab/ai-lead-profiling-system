import { useInView } from '../../hooks/useInView';
import { useContactForm } from '../../hooks/useContactForm';
import { useWebhook } from '../../hooks/useWebhook';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import Alert from '../ui/Alert';
import SectionHeader from '../ui/SectionHeader';
import FadeIn from '../ui/FadeIn';
import { classNames } from '../../utils/helpers';

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const form = useContactForm();
  const webhook = useWebhook();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.validate()) return;

    form.setIsSubmitting(true);
    const success = await webhook.submitLead(form.formData);

    if (success) {
      form.setSubmitSuccess(
        'Thank you! Your information has been submitted. Our team will get back to you shortly.'
      );
      form.reset();
    } else {
      form.setSubmitError(webhook.error);
    }

    form.setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute bottom-1/4 left-1/4 h-[400px] w-[600px] rounded-full bg-primary-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="Get In"
            highlight="Touch"
            subtitle="Ready to automate your lead qualification? Send us a message and we will get back to you within 24 hours."
          />
        </FadeIn>

        <div className="mx-auto mt-16 max-w-xl">
          <div
            ref={ref}
            className={classNames(
              'glass-card transition-all duration-700',
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            {form.submitStatus?.type === 'success' && (
              <Alert variant="success" className="mb-6">
                {form.submitStatus.message}
              </Alert>
            )}

            {form.submitStatus?.type === 'error' && (
              <Alert variant="error" className="mb-6">
                {form.submitStatus.message}
              </Alert>
            )}

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
              aria-label="Contact form"
            >
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                value={form.formData.name}
                onChange={(e) => form.updateField('name', e.target.value)}
                error={form.errors.name}
                required
                autoComplete="name"
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="you@company.com"
                value={form.formData.email}
                onChange={(e) => form.updateField('email', e.target.value)}
                error={form.errors.email}
                required
                autoComplete="email"
              />

              <Input
                label="Company"
                placeholder="Your company name"
                value={form.formData.company}
                onChange={(e) => form.updateField('company', e.target.value)}
                error={form.errors.company}
                required
                autoComplete="organization"
              />

              <Textarea
                label="Message"
                placeholder="Tell us about your needs..."
                value={form.formData.message}
                onChange={(e) => form.updateField('message', e.target.value)}
                error={form.errors.message}
                required
                rows={4}
              />

              <Button
                type="submit"
                size="lg"
                loading={form.isSubmitting}
                disabled={form.isSubmitting}
                className="w-full"
              >
                {form.isSubmitting ? 'Submitting...' : 'Send Message'}
              </Button>
            </form>

            <p className="mt-4 text-center text-xs text-gray-500">
              By submitting this form, you agree to our{' '}
              <a
                href="#"
                className="text-primary-400 underline decoration-primary-400/30 underline-offset-2 transition-colors hover:text-primary-300"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
