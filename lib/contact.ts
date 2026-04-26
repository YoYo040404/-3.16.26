export const CONTACT = {
  whatsappNumber: "+972543962871",
  phoneDisplay: "054-396-2871",
  waBaseUrl: "https://wa.me/972543962871?text=",
} as const

export const DEFAULT_WHATSAPP_MESSAGE =
  "שלום ג׳ריקו, אשמח לבדוק אפשרות לעבודה. מצורפות תמונות של השטח. מדובר ב־[פרקט / שטיח / דק / תיקון]. המיקום הוא [עיר]. תודה."

export function getWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `${CONTACT.waBaseUrl}${encodeURIComponent(message)}`
}
