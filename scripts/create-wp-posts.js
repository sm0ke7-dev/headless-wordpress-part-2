// Script to create service and location posts in WordPress via REST API
const wpUrl = 'http://physio-physical-therapy.local';
const username = 'admin'; // Change if different
const appPassword = 'qGR4 priH Qsen gzsN w3Td bPjB';

// Base64 encode credentials for Basic Auth
const auth = Buffer.from(`${username}:${appPassword}`).toString('base64');

// Service posts data
const services = [
  {
    title: 'Sports Injury Rehabilitation',
    slug: 'sports-injury-rehabilitation',
    content: `<h2>Comprehensive sports injury treatment and recovery</h2>
<p>Whether you're a weekend warrior or competitive athlete, sports injuries need specialized care to get you back in the game safely. Our sports injury rehabilitation program combines evidence-based treatment protocols with sport-specific training to restore function and prevent re-injury.</p>

<h3>Common conditions we treat</h3>
<ul>
<li>ACL and meniscus tears</li>
<li>Rotator cuff injuries</li>
<li>Ankle sprains and instability</li>
<li>Tennis and golfer's elbow</li>
<li>Runner's knee and IT band syndrome</li>
<li>Shin splints and stress fractures</li>
</ul>

<h3>Our approach</h3>
<p>We start with a thorough movement assessment to identify the root cause of your injury—not just where it hurts. Then we build a progressive rehab plan that addresses strength deficits, mobility restrictions, and movement patterns that led to the injury.</p>

<p>You'll work one-on-one with a licensed physical therapist who understands the demands of your sport. We don't just get you out of pain—we get you back to peak performance.</p>`,
    acf: {
      service_hero_heading: 'Sports Injury Rehabilitation',
      service_hero_description: 'Evidence-based treatment to get you back in the game stronger than before.',
      cta_heading: 'Ready to get back to your sport?',
      cta_description: 'Book your evaluation and we\'ll build a plan to get you back on the field.',
      cta_primary_button_text: 'Book Evaluation',
      cta_secondary_button_text: 'Call Now',
      cta_primary_button_url: '/book',
      cta_secondary_button_url: 'tel:+19165550100'
    }
  },
  {
    title: 'Post-Surgical Recovery',
    slug: 'post-surgical-recovery',
    content: `<h2>Expert post-operative physical therapy</h2>
<p>Surgery is just the first step. The real recovery happens in physical therapy. Our post-surgical rehab programs follow evidence-based protocols to restore mobility, strength, and function after orthopedic procedures.</p>

<h3>Surgeries we support</h3>
<ul>
<li>Total joint replacement (hip, knee, shoulder)</li>
<li>ACL reconstruction</li>
<li>Rotator cuff repair</li>
<li>Spinal surgery (fusion, discectomy)</li>
<li>Fracture fixation</li>
<li>Carpal tunnel release</li>
</ul>

<h3>Protocol-driven care</h3>
<p>We work directly with your surgeon to follow post-op protocols while adapting treatment to your specific needs and healing timeline. Our clinicians have advanced training in post-surgical rehabilitation and stay current with the latest research.</p>

<p>You'll know exactly what to expect at each phase of recovery—from initial range of motion work through return to full activity. We track measurable progress so you can see how you're improving week by week.</p>`,
    acf: {
      service_hero_heading: 'Post-Surgical Recovery',
      service_hero_description: 'Protocol-driven rehab to restore function after orthopedic surgery.',
      cta_heading: 'Start your post-op recovery',
      cta_description: 'We\'ll work with your surgeon to get you back to normal faster.',
      cta_primary_button_text: 'Book Evaluation',
      cta_secondary_button_text: 'Call Now',
      cta_primary_button_url: '/book',
      cta_secondary_button_url: 'tel:+19165550100'
    }
  },
  {
    title: 'Chronic Pain Management',
    slug: 'chronic-pain-management',
    content: `<h2>Break the cycle of chronic pain</h2>
<p>Living with chronic pain changes everything. Simple tasks become exhausting. Sleep suffers. Your world gets smaller. But chronic pain doesn't have to be permanent—with the right treatment approach, you can regain control.</p>

<h3>Conditions we treat</h3>
<ul>
<li>Chronic low back pain</li>
<li>Neck pain and headaches</li>
<li>Fibromyalgia</li>
<li>Arthritis pain</li>
<li>Nerve pain (sciatica, neuropathy)</li>
<li>Complex regional pain syndrome</li>
</ul>

<h3>A different approach</h3>
<p>Chronic pain requires a different strategy than acute injuries. We use pain science education, graded exposure, manual therapy, and movement retraining to help your nervous system recalibrate and reduce pain sensitivity.</p>

<p>You'll learn why you hurt and what you can do about it. We'll identify movement patterns that trigger flare-ups and build strategies to manage symptoms when they arise. The goal isn't just less pain—it's getting back to the activities that matter to you.</p>`,
    acf: {
      service_hero_heading: 'Chronic Pain Management',
      service_hero_description: 'Evidence-based treatment to reduce pain and restore function.',
      cta_heading: 'Ready to address your chronic pain?',
      cta_description: 'Book an evaluation and we\'ll show you a path forward.',
      cta_primary_button_text: 'Book Evaluation',
      cta_secondary_button_text: 'Call Now',
      cta_primary_button_url: '/book',
      cta_secondary_button_url: 'tel:+19165550100'
    }
  },
  {
    title: 'Work Injury Rehabilitation',
    slug: 'work-injury-rehabilitation',
    content: `<h2>Get back to work safely and effectively</h2>
<p>Work injuries impact more than just your body—they affect your income, your career, and your family. Our work injury rehabilitation program focuses on getting you back to your job safely while preventing future injuries.</p>

<h3>Common work injuries</h3>
<ul>
<li>Repetitive strain injuries</li>
<li>Lifting-related back injuries</li>
<li>Carpal tunnel and wrist pain</li>
<li>Shoulder injuries</li>
<li>Slip and fall injuries</li>
<li>Post-accident rehabilitation</li>
</ul>

<h3>Job-specific rehabilitation</h3>
<p>We don't just treat your injury—we analyze the job tasks that contributed to it. Our functional capacity evaluations identify physical demands of your work and ensure you're ready before you return.</p>

<p>We work with workers' comp insurance and case managers to coordinate your care. You'll receive clear documentation of your progress and work restrictions. Our goal is to get you back to full duty while minimizing re-injury risk.</p>`,
    acf: {
      service_hero_heading: 'Work Injury Rehabilitation',
      service_hero_description: 'Specialized care to get you back to work safely and prevent re-injury.',
      cta_heading: 'Start your work injury recovery',
      cta_description: 'We accept workers\' comp and will coordinate with your employer.',
      cta_primary_button_text: 'Book Evaluation',
      cta_secondary_button_text: 'Call Now',
      cta_primary_button_url: '/book',
      cta_secondary_button_url: 'tel:+19165550100'
    }
  }
];

// Location posts data
const locations = [
  {
    title: 'Downtown Sacramento',
    slug: 'downtown-sacramento',
    content: `<h2>Convenient physical therapy in downtown Sacramento</h2>
<p>Our Downtown Sacramento clinic brings expert physical therapy to the heart of the city. Located near the Capitol and within walking distance of major office buildings, we make it easy to fit PT into your workday.</p>

<h3>What to expect</h3>
<p>Modern facility with private treatment rooms, on-site parking, and early morning appointments for commuters. Our downtown team specializes in sports injuries, post-surgical recovery, and workplace ergonomics.</p>

<p>We're in-network with most major insurance plans and accept workers' compensation cases. Walk-ins welcome for initial consultations—book online or call to schedule.</p>`,
    acf: {
      location_hero_heading: 'Downtown Sacramento',
      location_hero_description: 'Expert physical therapy in the heart of downtown',
      location_address: '123 Capitol Mall, Sacramento, CA 95814',
      location_phone: '(916) 555-0100',
      location_email: 'downtown@physio-pt.com',
      location_hours: 'Mon-Fri: 7am-7pm, Sat: 8am-2pm',
      cta_heading: 'Book your appointment',
      cta_description: 'Start your recovery at our downtown location today.',
      cta_primary_button_text: 'Book Now',
      cta_secondary_button_text: 'Call Us',
      cta_primary_button_url: '/book',
      cta_secondary_button_url: 'tel:+19165550100'
    }
  },
  {
    title: 'East Sacramento',
    slug: 'east-sacramento',
    content: `<h2>Neighborhood physical therapy in East Sacramento</h2>
<p>Our East Sacramento clinic brings personalized physical therapy to your neighborhood. Located on Folsom Boulevard with easy parking, we serve the local community with convenient appointment times and a welcoming atmosphere.</p>

<h3>Family-focused care</h3>
<p>Our East Sac team treats everyone from weekend warriors to grandparents managing arthritis. We specialize in chronic pain management, sports injuries, and helping active adults stay mobile and pain-free.</p>

<p>Flexible scheduling with evening and weekend appointments. We work with your insurance to minimize out-of-pocket costs. Same-day appointments often available—call to check availability.</p>`,
    acf: {
      location_hero_heading: 'East Sacramento',
      location_hero_description: 'Your neighborhood physical therapy clinic',
      location_address: '4567 Folsom Blvd, Sacramento, CA 95819',
      location_phone: '(916) 555-0200',
      location_email: 'eastsac@physio-pt.com',
      location_hours: 'Mon-Fri: 8am-6pm, Sat: 9am-1pm',
      cta_heading: 'Schedule your visit',
      cta_description: 'Convenient care in your East Sacramento neighborhood.',
      cta_primary_button_text: 'Book Now',
      cta_secondary_button_text: 'Call Us',
      cta_primary_button_url: '/book',
      cta_secondary_button_url: 'tel:+19165550200'
    }
  },
  {
    title: 'Midtown Sacramento',
    slug: 'midtown-sacramento',
    content: `<h2>Urban physical therapy in Midtown Sacramento</h2>
<p>Our Midtown clinic brings cutting-edge physical therapy to Sacramento's most vibrant neighborhood. Located on J Street with bike parking and easy light rail access, we fit into your active urban lifestyle.</p>

<h3>Active lifestyle specialists</h3>
<p>The Midtown team specializes in keeping active adults moving—whether you're training for a marathon, managing desk-job pain, or recovering from surgery. We understand the demands of urban life and build treatment plans that work with your schedule.</p>

<p>Modern facility with evidence-based treatment protocols. We're in-network with major PPO plans and offer competitive self-pay rates. Book online 24/7 or text to schedule.</p>`,
    acf: {
      location_hero_heading: 'Midtown Sacramento',
      location_hero_description: 'Physical therapy for active urban lifestyles',
      location_address: '789 J Street, Sacramento, CA 95814',
      location_phone: '(916) 555-0300',
      location_email: 'midtown@physio-pt.com',
      location_hours: 'Mon-Fri: 7am-8pm, Sat: 8am-3pm',
      cta_heading: 'Get started today',
      cta_description: 'Expert care in the heart of Midtown.',
      cta_primary_button_text: 'Book Now',
      cta_secondary_button_text: 'Call Us',
      cta_primary_button_url: '/book',
      cta_secondary_button_url: 'tel:+19165550300'
    }
  },
  {
    title: 'Natomas',
    slug: 'natomas',
    content: `<h2>Comprehensive physical therapy in Natomas</h2>
<p>Our Natomas clinic serves North Sacramento with expert physical therapy in a modern, family-friendly facility. Located near major shopping and with ample free parking, we make PT convenient for busy families.</p>

<h3>Community-focused care</h3>
<p>The Natomas team treats the whole family—from youth sports injuries to post-surgical recovery to senior mobility. We're part of the community and understand the unique needs of North Sacramento residents.</p>

<p>Spacious facility with the latest rehab equipment. We accept most insurance plans including Medicare and workers' compensation. Telehealth follow-ups available for established patients. Call to schedule your first visit.</p>`,
    acf: {
      location_hero_heading: 'Natomas',
      location_hero_description: 'Family-friendly physical therapy in North Sacramento',
      location_address: '2345 Truxel Road, Sacramento, CA 95833',
      location_phone: '(916) 555-0400',
      location_email: 'natomas@physio-pt.com',
      location_hours: 'Mon-Fri: 8am-7pm, Sat: 9am-2pm',
      cta_heading: 'Visit our Natomas clinic',
      cta_description: 'Convenient, family-friendly care in North Sacramento.',
      cta_primary_button_text: 'Book Now',
      cta_secondary_button_text: 'Call Us',
      cta_primary_button_url: '/book',
      cta_secondary_button_url: 'tel:+19165550400'
    }
  }
];

async function createPost(postType, postData) {
  const endpoint = `${wpUrl}/wp-json/wp/v2/${postType}`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: postData.title,
        slug: postData.slug,
        content: postData.content,
        status: 'publish',
        acf: postData.acf
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`HTTP ${response.status}: ${error}`);
    }

    const result = await response.json();
    console.log(`✓ Created ${postType}: ${postData.title} (ID: ${result.id})`);
    return result;
  } catch (error) {
    console.error(`✗ Failed to create ${postType} "${postData.title}":`, error.message);
    throw error;
  }
}

async function main() {
  console.log('Creating WordPress posts...\n');

  try {
    // Create services (REST API endpoint is plural)
    console.log('Creating services:');
    for (const service of services) {
      await createPost('services', service);
    }

    console.log('\nCreating locations:');
    for (const location of locations) {
      await createPost('locations', location);
    }

    console.log('\n✓ All posts created successfully!');
    console.log(`\nCheck your WordPress admin at: ${wpUrl}/wp-admin/`);
  } catch (error) {
    console.error('\n✗ Script failed:', error.message);
    process.exit(1);
  }
}

main();
