'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BJPAnimatedBanner() {
  return (
    <section
      className="position-relative overflow-hidden d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #ff9933, #ffffff, #138808)',
        padding: '2rem',
      }}
    >
      <div className="container text-center text-lg-start">
        <div className="row align-items-center">
          {/* Leader Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="col-lg-5 text-center order-1 order-lg-2"
          >
            <div
              style={{
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto',
                cursor: 'default',
                boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#fff',
                position: 'relative',
                paddingTop: '100%', // 1:1 Aspect Ratio
              }}
            >
              <Image
                src="/DrAntul.jpg"
                alt="जिला पंचायत चेयरमैन डॉ. अंतुल तेवतिया "
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                priority
              />
            </div>

            <div
              style={{
                color: '#3a1a6a',
                fontFamily: "'Noto Sans Devanagari', sans-serif",
                marginTop: '1.5rem',
                textAlign: 'center',
                borderTop: '2px solid #e65100',
                paddingTop: '1rem',
                maxWidth: '320px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <h4
                style={{
                  fontWeight: '800',
                  marginBottom: '0.2rem',
                  fontSize: '1.4rem',
                  color: '#7b1fa2',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                डॉ. अंतुल तेवतिया

              </h4>
              <p
                style={{
                  fontWeight: '600',
                  fontSize: '1rem',
                  marginBottom: '0.3rem',
                  color: '#e65100',
                }}
              >
                (जिला पंचायत चेयरमैन )
                <br />
                {/*  */}
              </p>
              <p
                style={{
                  fontWeight: '500',
                  fontSize: '0.95rem',
                  margin: 0,
                  color: '#3a1a6a',
                  opacity: 0.8,
                  fontFamily: "'Noto Sans', sans-serif",
                }}
              >
                भारतीय जनता पार्टी
              </p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="col-lg-7 mb-5 mb-lg-0 order-2 order-lg-1"
            style={{
              color: '#3a1a6a',
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            <h1 className="fw-bold display-5 text-dark mb-4" style={{ color: '#3a1a6a' }}>
              युवा शक्ति, भारत की ताकत!
            </h1>

            <p>प्रिय युवाओं,</p>
            <p>
              आप देश की <strong style={{ color: '#9c27b0' }}>ऊर्जा</strong> हैं, आप{' '}
              <strong style={{ color: '#9c27b0' }}>भविष्य की नींव</strong> हैं।
              <br />
              अगर भारत को <strong style={{ color: '#9c27b0' }}>महान</strong> बनाना
              है, तो उसकी शुरुआत आपसे होगी।
            </p>
            <p>
              आज देश को आपकी <strong style={{ color: '#9c27b0' }}>सोच</strong>,
              आपकी <strong style={{ color: '#9c27b0' }}>मेहनत</strong>, और आपके{' '}
              <strong style={{ color: '#9c27b0' }}>सपनों</strong> की ज़रूरत है।
              <br />
              आपके हाथ में <strong style={{ color: '#9c27b0' }}>तकनीक</strong> है,
              आपके पास <strong style={{ color: '#9c27b0' }}>जोश</strong> है, और आपके
              अंदर <strong style={{ color: '#9c27b0' }}>बदलाव लाने की ताक़त</strong>{' '}
              है।
            </p>
            <p>
              आज हम एक ऐसा भारत बनाना चाहते हैं —<br />
              जहाँ हर युवा को <strong style={{ color: '#9c27b0' }}>अवसर</strong> मिले,
              <br />
              जहाँ शिक्षा सिर्फ <strong style={{ color: '#9c27b0' }}>डिग्री</strong> न
              हो, बल्कि <strong style={{ color: '#9c27b0' }}>दिशा</strong> हो,
              <br />
              जहाँ{' '}
              <strong style={{ color: '#9c27b0' }}>
                स्टार्टअप्स, इनोवेशन और आत्मनिर्भरता
              </strong>{' '}
              युवाओं के नेतृत्व में हों।
            </p>
            <p>
              <strong style={{ color: '#9c27b0' }}>नवाचार</strong> आपकी कल्पना से
              निकलेगा,
              <br />
              <strong style={{ color: '#9c27b0' }}>रक्षा</strong> आपकी जिम्मेदारी
              होगी,
              <br />
              <strong style={{ color: '#9c27b0' }}>विकास</strong> आपकी रचनात्मकता से
              आएगा,
              <br />
              और <strong style={{ color: '#9c27b0' }}>स्वच्छता</strong> आपकी सोच से
              शुरू होगी।
            </p>
            <p>
              युवा सिर्फ उम्र नहीं होती, यह एक सोच है।
              <br />
              एक ऐसा जज़्बा, जो कहता है —{' '}
              <em style={{ fontWeight: '700', color: '#4a0072' }}>
                "हम बदलेंगे, तो देश बदलेगा!"
              </em>
            </p>
            <p>
              आइए, एकजुट हों और एक संकल्प लें —<br />
              हम एक{' '}
              <strong style={{ color: '#9c27b0' }}>
                सुरक्षित, समृद्ध, स्वच्छ, और प्रगतिशील भारत
              </strong>{' '}
              बनाएंगे।
            </p>
            <p style={{ fontWeight: '800', fontSize: '1.3rem', marginTop: '20px' }}>
              युवाओं का भारत — आत्मनिर्भर भारत!
            </p>
            <p
              style={{
                fontWeight: '900',
                fontSize: '1.5rem',
                color: '#911f9e',
                textTransform: 'uppercase',
              }}
            >
              जय युवा, जय भारत!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
