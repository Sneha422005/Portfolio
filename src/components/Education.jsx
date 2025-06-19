export default function Education() {
  const educationList = [
    {
      title: "Goverment Engineering College Thrissur",
      link: "https://gectcr.ac.in/",
    },
    {
      title: "Vasavi Vidyalaya",
      link: "https://vasavividyalaya.org/",
    },
    {
      title: "International Indian School Dammam",
      link: "https://iisdammam.edu.sa/",
    },
  ];

  

  return (
    <section id="education" className="h-screen py-20 px-6 ">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Education</h2>
        <ul className="list-disc list-inside space-y-4 text-lg marker:text-white">
          {educationList.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:underline"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
