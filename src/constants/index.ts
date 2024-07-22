export const hero = [
  {
    image: "/images/qrCode.png",
    title: "Meet the Bitly QR Code Generator: The simplest way to create",
    desc: "Generate a custom QR Code in second, share it with your audience, and instantly access your scan data - all inside the bitly connections Platform.",
  },
  {
    image: "/images/security.png",
    title: "Create memorable connection with our powerful URL Shortener",
    desc: "Spark instant connection with your audience using trimmed, trustworthy, and trackable links within the Bitly Connections Platform.",
  },
  {
    image: "/images/socialnetwork.png",
    title: "Build Stronger Digital Connection",
    desc: "Use our URL shortener, QR Codes, and Link pages to engage your audience and connect them to the right information. Build, edit and track everything inside the Bilty Connections Platform.",
  },
];

export const hero1 = [
  {
    image: "/images/brows.png",
    title: "Use your QR Code to demand attention and inspire action",
    subTitle: "Quickly generate QR Codes that stand out, feel on brand and connect with your audience",
    data: [
      "Create a custom QR Code for every occasion - from an invite-only event all the way to an app launch - so you can share key content in the most convenient way.",
      "Customize your code with your logo, brand colors, unique patterns, frames and more so it catches every eye.",
      "Use your QR Code anywhere - on fliers, billboards, digital postures and more-so engaging with you feels like that the most natural thing to do.",
    ],
  },
  {
    image: "/images/checklist.png",
    title: "Learn how your audience interacts with every QR Code",
    subTitle: "Get the information you need so you can understand which codes work and which need to change.",
    data: [
      "Analyze detailed scan data so you can learn from your audience’s actions and make smarter decisions.",
      "Access to-the-minute engagement metrics inside your Bitly dashboard so you don’t need other complicated tracking and analytics tools.",
      "Compare QR Code performance so you can grow your knowledge and engage with your audience in the ways they like.",
    ],
  },
  {
    image: "/images/workEnvironment.png",
    title: "Build unforgettable brand connections in a single platform",
    subTitle: "Replace your horde of point solutions and give your team complete control over every connection experience.",
    data: [
      "Manage QR Codes and links in one dashboard, so you can make changes and create new assets without switching platforms.",
      "Streamline campaign analysis so you see the full performance story and make quick, informed decisions.",
      "Use our library of 800+ integrations to add customized QR Codes to the software and apps you’re using today.",
    ],
  },
];

export const hero2 = [
  {
    image: "/images/findsomething.png",
    title: "URL Shortener",
    points: ["URL shortening at scale", "Customer links with your brand", "URL redirects", "Advanced analytics & tracking"],
  },
  {
    image: "/images/scanQrCode.png",
    title: "Popular QR Code Features",
    points: ["Fully customisable QR Codes ", "Dynamic QR Codes", "QR Code types & destination options", "Advanced analytics & tracking"],
  },
  {
    image: "/images/review.png",
    title: "Popular Link-in-bio Features",
    points: ["Custom URLs for social media", "Customisable landing page", "East-to-manage links", "Link and landing page tracking"],
  },
];

export const review = [
  {
    review: 5,
    name: "Joseph Martinez",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    review: 5,
    name: "Joseph Martinez",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    review: 5,
    name: "Joseph Martinez",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    review: 5,
    name: "Joseph Martinez",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
];

export const faq = [
  { title: "What is a URL Shortener ?" },
  { title: "Benefits of a short URL ?" },
  { title: "What is a Custom URL Shortener ?" },
  { title: "What is a QR Code ?" },
  { title: "What can QR Code do ?" },
  { title: "What is a Link-in-bio ?" },
  { title: "What can QR Code do ?" },
  { title: "What is a Link-in-bio ?" },
];

export const botMeta = (data: { title?: string; desc?: string; image?: string; link?: string }) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- open graph meta -->
    <meta property="og:url" content="${data?.link}" />
    <meta property="og:image" content="${data?.image}" />
    <meta property="og:title" content="${data?.title}" />
    <meta property="og:description" content="${data?.desc}" />
    <!-- twitter meta -->
    <meta property="twitter:url" content="${data?.link}" />
    <meta property="twitter:image" content="${data?.image}" />
    <meta property="twitter:title" content="${data?.title}" />
    <meta property="twitter:description" content="${data?.desc}" />
    <script>
      setTimeout(() => (window.location.href = "${data?.link}"), 100);
    </script>
  </head>
  <body></body>
</html>`;
