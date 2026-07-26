const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email) {
  return EMAIL_RE.test(String(email).toLowerCase());
}

export function validateRequired(value) {
  return typeof value === 'string' ? value.trim().length > 0 : Boolean(value);
}

export function validateName(name) {
  if (!validateRequired(name)) return 'Name is required';
  if (name.trim().length < 2) return 'Name must be at least 2 characters';
  if (name.trim().length > 100) return 'Name must be less than 100 characters';
  return null;
}

export function validateEmailField(email) {
  if (!validateRequired(email)) return 'Email is required';
  if (!validateEmail(email)) return 'Please enter a valid email address';
  return null;
}

export function validateCompany(company) {
  if (!validateRequired(company)) return 'Company is required';
  if (company.trim().length > 200) return 'Company must be less than 200 characters';
  return null;
}

export function validateMessage(message) {
  if (!validateRequired(message)) return 'Message is required';
  if (message.trim().length < 10) return 'Message must be at least 10 characters';
  if (message.trim().length > 2000) return 'Message must be less than 2000 characters';
  return null;
}

export function validateContactForm({ name, email, company, message }) {
  const errors = {};

  const nameError = validateName(name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmailField(email);
  if (emailError) errors.email = emailError;

  const companyError = validateCompany(company);
  if (companyError) errors.company = companyError;

  const messageError = validateMessage(message);
  if (messageError) errors.message = messageError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
