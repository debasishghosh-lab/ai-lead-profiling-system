import { useState, useCallback } from 'react';
import { validateContactForm } from '../utils/validation';

const INITIAL_STATE = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export function useContactForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const updateField = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const validate = useCallback(() => {
    const result = validateContactForm(formData);
    setErrors(result.errors);
    return result.isValid;
  }, [formData]);

  const reset = useCallback(() => {
    setFormData(INITIAL_STATE);
    setErrors({});
  }, []);

  const clearStatus = useCallback(() => {
    setSubmitStatus(null);
  }, []);

  const setSubmitError = useCallback((message) => {
    setSubmitStatus({ type: 'error', message });
  }, []);

  const setSubmitSuccess = useCallback((message) => {
    setSubmitStatus({ type: 'success', message });
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    updateField,
    validate,
    reset,
    setIsSubmitting,
    setSubmitError,
    setSubmitSuccess,
    clearStatus,
  };
}
