// import EwayPayForm from "@/components/EwayPayForm";;
import MedicineList from '../components/MedicineList';
import  {medicines}  from './data/medicines';


// export const revalidate = 60
// const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

// مطمئن شوید NEXT_PUBLIC_SITE_URL در .env.local ست شده و بعد سرور رو ری‌استارت کنید
// if (!process.env.NEXT_PUBLIC_SITE_URL) {
//   console.warn('⚠️ NEXT_PUBLIC_SITE_URL is not defined; using http://localhost:3000')
// }
// const res = await fetch(
//   `${baseUrl}/api/medic/medicines`,
//   { cache: 'no-store', next: { revalidate } }
// )
// اعتبارسنجی اولیه  
// console.log('fetch medicines status:', res.status, res.headers.get('content-type'))

// if (!res.ok) {
//   throw  Error(`Failed to fetch medicines: ${res.status}`)
// }

// const data = await res.json()
// const medicines = Array.isArray(data) ? data : data.medicines


export default  function HomePage() {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_SITE_URL}/api/medic/medicines`,
  //   { next: { revalidate } }
  // );
  // const data = await res.json();
  // const medicines = Array.isArray(data) ? data : data.medicines;
return (
  <MedicineList items={medicines} />
);
}