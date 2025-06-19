export default function Footer() {
  return (
    <footer className=" text-white text-center py-6">
      <p>© {new Date().getFullYear()} Sneha Aravind </p>
      <p className="text-sm mt-2">
        Built using React & Tailwind CSS
      </p>
    </footer>
  );
}
