import React from "react";
import { useTranslation } from 'react-i18next';
import "./PhotoScroller.css";

const photos = [
  { 
    src: "/Granth.jpg", 
    key: "granth"
  },
  { 
    src: "/kulvruttant_samiti.jpg", 
    key: "kulvruttantant_samiti"
  },
  { 
    src: "/news_events.jpg", 
    key: "news_events"
  },
  { 
    src: "/photogallery.jpg", 
    key: "photogallery"
  },
  { 
    src: "/Presidents_thoughts.jpg", 
    key: "presidents_thoughts"
  },
  { 
    src: "/remembrance_day.jpg", 
    key: "remembrance_day"
  },
  { 
    src: "/Vaatchaal.jpg", 
    key: "vaatchaal"
  }
];

export default function PhotoScroller() {
  const { t } = useTranslation();

  return (
    <div className="photo-scroller-container">
      <div className="photo-scroller-background">
        <div className="features-description">
          {t('photoscroller.features_description')}
        </div>
        <div className="photo-strip">
          {photos.concat(photos).map((item, idx) => (
            <div key={idx} className="photo-item-container">
              <img src={item.src} alt={t(`photoscroller.${item.key}`)} className="photo-item" />
              <div className="photo-label">
                <div className="label-text">{t(`photoscroller.${item.key}`)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}