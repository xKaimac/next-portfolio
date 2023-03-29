import React from 'react';


import { OldWebsiteBody } from '@/components/oldWebsite/oldWebsiteBody';
import { OldWebsiteCode } from '@/components/oldWebsite/oldWebsiteCode';
import { OldWebsiteHead } from '@/components/oldWebsite/oldWebsiteHead';
import { OldWebsiteIframe } from '@/components/oldWebsite/oldWebsiteIframe';

import styles from "@/styles/oldwebsite.module.css";


export default function oldwebsite() {
  return (
    <>
    <OldWebsiteHead />
    <div className={styles.container}>
      <div className={styles.article}>
        <OldWebsiteIframe />
        <OldWebsiteBody /> 
        <OldWebsiteCode />
      </div>
    </div>
    </>
  )
}