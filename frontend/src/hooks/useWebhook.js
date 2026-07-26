import { useState, useCallback } from 'react';
import { submitLead } from '../services/webhook';
import { readVisitStorage } from '../utils/storage';

export function useWebhook() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submit = useCallback(async (formData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await submitLead({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        query: formData.message,
        visit_history: readVisitStorage(),
      });
      setSuccess(true);
      return true;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to submit lead. Please try again.'
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setError(null);
    setSuccess(false);
  }, []);

  return { isLoading, error, success, submitLead: submit, reset };
}
