const services = [
  'Start Business',
  'Private Limited Company Registration',
  'Limited Liability Partnership Registration',
  'Section NPO',
  'GST Registration',
  'FSSAI Registration',
  'ISO Certificate',
  'Import Export Code (IEC)',
  'ESI and PF Registration',
  'MSME Registration',
  'Trademark Registration',
  'Copyright Registration',
  'Design Registration',
  'Income Tax Return',
  'GST Return',
  'TDS Return',
  'Income Tax Notice'
];

export default function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {services.map(service => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>
  );
}
