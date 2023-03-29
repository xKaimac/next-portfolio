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
    <h1 className={styles.title}>
        
    </h1>
    <div className={styles.container}>
        <OldWebsiteIframe />
        <OldWebsiteBody /> 
        <OldWebsiteCode />
    </div>
    </>
  )
}