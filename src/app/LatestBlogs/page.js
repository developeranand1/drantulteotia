'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Blog.module.css'; // Make sure this file exists

const blogPosts = [
  {
    id: 1,
    image: '/blogA1.jpg',
    date: '21',
    month: 'Aug',
    year: '2023',
    category: 'Politics',
    title:
      'डॉक्टरी से राजनीति तक: बुलंदशहर की जिला पंचायत अध्यक्ष डॉ. अंतुल तेवतिया की सफलता की कहानी',
    shortDescription:
      'डॉक्टरी के पेशे से राजनीति की पिच पर, बुलंदशहर जिला पंचायत अध्यक्ष डॉ अंतुल तेवतिया से खास बातचीत...',
    fullDescription: `यूपी जिला पंचायत अध्यक्ष पद के नतीजों को सेमीफाइनल की तरह माना जा रहा था। अगर नतीजों को देखें तो बीजेपी ने अपने सहयोगियों के 67 सीटों पर कब्जा कर लिया। इन नतीजों की एक और खास बात यह है कि महिलाएं भी बड़ी संख्या में जीत कर अपनी दमदार मौजूदगी दर्ज करा चुकी हैं। उनमें से एक हैं बुलंदशहर जिला पंचायत अध्यक्ष के लिए निर्विरोध निर्वाचित डॉ अंतुल तेवतिया। राजनीति की पिच पर उतरने से पहले वो डॉक्टरी के जरिए लोगों को सेवा कर रही थीं। लेकिन उनकी झोली में जिला पंचायत अध्यक्ष का पद भी आ चुका है तो जाहिर है कि उनके कार्यक्षेत्र को अब और अधिक विस्तार मिला है। बीजेपी की जीत और उनकी खुद की जीत किस तरह से बुलंदशहर की जीत के साथ महिलाओं की कामयाबी है|`,
  },
  {
    id: 2,
    image: '/blogA2.jpeg',
    date: '20',
    month: 'Jul',
    category: 'Politics',
    title:
      'डॉ. अंतुल तेवतिया का जीवन परिचय: उम्र, शिक्षा, परिवार, और बुलंदशहर जिला पंचायत अध्यक्ष बनने तक का राजनीतिक सफर',
    shortDescription:
      'डॉ. अंतुल तेवतिया बुलंदशहर की जिला पंचायत अध्यक्ष, राजनीतिक क्षेत्र में आगे बढ़ना इनका लक्ष्य',
    fullDescription: `Dr Antul Teotia: डॉ. अंतुल तेवतिया बुलंदशहर की जिला पंचायत अध्यक्ष है, भाजपा के टिकट पर निर्विरोध निर्वाचित हुई है। प्रारंभिक शिक्षा गुलावठी में प्राप्त की।

Dr Antul Teotia: बुलंदशहर जिला पंचायत अध्यक्ष का चुनाव जीतने वाली डॉ. अंतुल तेवतिया कौन है Dr Antul Teotia Biography), उनकी उम्र, शिक्षा (Dr Antul Teotia Education), परिवारिक पृष्ठभूमि (Dr Antul Teotia Family) क्या है। डॉ. अंतुल तेवतिया किस पार्टी की हैं, उनका राजनीतिक सफर बारें में Newstrack आपको बताने जा रहा है।`,
    // link: 'https://newstrack.com/uttar-pradesh/pashchimanchal/bulandshahr/dr-antul-teotia-jeevan-parichay-biography-hindi-bulandshahr-zila-panchayat-adhyaksh-dr-antul-teotia-profile-age-family-political-career-controversy-education-up-bjp-281587',
  },
  {
    id: 3,
    image: '/blogA3.jpg',
    date: '20',
    month: 'Jul',
    category: 'Politics',
    title: 'डॉ. अंतुल तेवतिया की कुर्सी खतरे में! अविश्वास प्रस्ताव की तैयारी शुरू',
    shortDescription:
      'जिला पंचायत चेयरमैन डॉ.अंतुल तेवतिया की मुश्किलें बढ़ी, अविश्वास प्रस्ताव लाने की तैयारी में सदस्य',
    fullDescription: `बुलंदशहर की जिला पंचायत चेयरमैन की मुश्किलें बढ़ सकती हैं। जिला पंचायत सदस्य उनके खिलाफ अविश्वास प्रस्ताव लाने की तैयारी कर रहे हैं। उनके खिलाफ वार्ड संख्या -45 की जिला पंचायत सदस्य दुलारी देवी विपक्ष में आ गई हैं। दुलारी देवी का कहना है कि जिला पंचायत चेयरमैन डॉक्टर अंतुल तेवतिया विकास कार्यों में मनमानी कर रही हैं।`,
  },
  {
    id: 4,
    image: '/blogA4.0.jpg',
    date: '10',
    month: 'Jun',
    category: 'Press',
    title: 'सेवा से नेतृत्व तक: डॉ. अंतुल तेवतिया का प्रेरणादायक सफर',
    shortDescription:
      'डॉ. अंतुल तेवतिया ने डॉक्टरी से राजनीति तक का सफर विश्वास और सेवा भाव से तय किया है। अब वे भाजपा की बुलंदशहर जिला पंचायत अध्यक्ष के रूप में समाज सेवा में जुटी हैं।',
    fullDescription: `सेवा से नेतृत्व तक: डॉ. अंतुल तेवतिया का प्रेरणादायक सफर
डॉ. अंतुल तेवतिया का एक डॉक्टर से राजनीतिक नेता तक का सफर उनके बहुआयामी व्यक्तित्व का प्रतीक है। उन्होंने अपने चिकित्सकीय अनुभव को जनसेवा के क्षेत्र में बखूबी अपनाया और राजनीति को भी एक सेवा का माध्यम बनाया। उनकी करुणा और समझदारी ने दोनों क्षेत्रों को समृद्ध किया है।

विकास की सोच, सेवा का संकल्प
हर भूमिका में डॉ. अंतुल तेवतिया प्रगति की सोच से प्रेरित रहती हैं। अस्पताल से लेकर पंचायत तक, उन्होंने हमेशा आम जन की भलाई को प्राथमिकता दी है। भारतीय जनता पार्टी में उनकी भूमिका और बतौर जिला पंचायत अध्यक्ष उनका नेतृत्व यह दर्शाता है कि अगर इरादा नेक हो, तो बदलाव लाना संभव है।`,
  },
   {
  id: 5,
  image: '/blogA5.jpg',
  date: '26',
  month: 'Jan',
  year: '2022',
  category: 'Politics',
  title: 'भारतीय राजनीति के चाणक्य अमित शाह जी से भेंट: जाट समाज के सम्मान की नई दिशा',
  shortDescription: 'दिल्ली में केन्द्रीय गृह व सहकारिता मंत्री माननीय अमित शाह जी से भेंट कर पश्चिम यूपी के जाट समाज के सम्मान और भाजपा के योगदान पर चर्चा की गई।',
  fullDescription: `भारतीय राजनीति के चाणक्य, देशविरोधियों के लिए दहशत का पर्याय और केन्द्रीय गृह व सहकारिता मंत्री मा० अमित शाह जी का दिल्ली में मार्गदर्शन मिला। बैठक में पश्चिमी उत्तर प्रदेश से जाट समाज के लोग उपस्थित रहे। जाट समाज स्वाभिमानी और शूरवीर समाज है, जिसे सम्मान दिलाने का कार्य भाजपा ने किया है। 
इस भेंट के माध्यम से जाट समाज की भावनाओं को प्रमुखता दी गई और भाजपा की समाज के प्रति प्रतिबद्धता को दोहराया गया। यह मुलाकात सामाजिक समरसता और राजनीतिक दिशा दोनों के लिहाज से महत्वपूर्ण रही।`
},

];

export default function BlogPage() {
  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleReadMore = (postId) => {
    setExpandedPosts((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  return (
    <div className={`container-fluid min-vh-100 ${styles.bjpBackground}`}>
      <div className="container py-5">
        {/* Title Section */}
        <div className="text-center mb-5 d-flex justify-content-center align-items-center gap-3">
          <div style={{ width: 60, height: 60, position: 'relative' }}>
            <Image
              src="/bjp-logo-png.png"
              alt="Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <div>
            <h2 className={`${styles.tricolorText} mb-0`}>
              <span>Latest</span> <span>Blogs</span>
            </h2>
            <p className="text-white fs-5 mt-2">
              Stay updated with our latest news, insights, and stories.
            </p>
            <hr className={`${styles.customHr}`} />
          </div>
        </div>

        {/* Blog Cards */}
        {blogPosts.map((post) => {
          const isExpanded = expandedPosts[post.id];
          return (
            <div
              key={post.id}
              className={`row align-items-center bg-white shadow rounded mb-5 p-3 ${styles.cardHover}`}
              style={{ borderLeft: '5px solid #ff6f00' }}
            >
              <div className="col-md-4">
                <div className="position-relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="img-fluid rounded"
                  />
                  <div className="position-absolute top-0 start-0 bg-warning text-white text-center px-3 py-2 rounded-end">
                    <div className="fw-bold fs-5">{post.date}</div>
                    <div className="fs-6">{post.month}</div>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <p className="mb-2 text-muted small">
                  <span className="text-success fw-semibold">{post.category}</span> /
                  <span className="ms-1 text-dark">By Admin</span> /
                  <span className="ms-1 text-danger">1 Comments</span>
                </p>
                <h5 className={`fw-bold ${styles.textOrange}`}>{post.title}</h5>
                <p className="text-dark" style={{ whiteSpace: 'pre-line' }}>
                  {isExpanded ? post.fullDescription : post.shortDescription}
                </p>

                {/* External link if available */}
                {post.link && isExpanded && (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary me-2 mt-2"
                  >
                    
                  </a>
                )}

                <button
                  className="btn btn-sm btn-outline-warning mt-2"
                  onClick={() => toggleReadMore(post.id)}
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
