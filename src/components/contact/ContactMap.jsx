export default function ContactMap() {
  return (
    <iframe
      className="position-relative rounded w-100 h-100"
      title="Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29565.80211848142!2d139.95132676084046!3d36.25613375755653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ab0d06a9e599%3A0x1d1251badc3fd4bb!2s308-0112%2C%20Japan!5e0!3m2!1sen!2sus!4v1729411524901!5m2!1sen!2sus"
      width="600"
      height="450"
      style={{ border: 0, minHeight: 350 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
