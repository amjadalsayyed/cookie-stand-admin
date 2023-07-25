import data from "@/data";
export default function Footer({ formdata }) {
  return (
    <footer className="p-4 mt-8 bg-green-500 text-gray-50">
      <h2> {formdata.length} Locations World Wide</h2>
    </footer>
  );
}
