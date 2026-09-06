# California Coverage Craft

Build a production-quality, responsive insurance agency website for:

COMPANY NAME:
Charlie M Richardson

BUSINESS:
Life, Health, Medicare, Retirement, Disability, Income and Business Insurance

TARGET LOCATION:
California, USA

IMPORTANT:
I have provided Figma screenshots/design references for the homepage and inner/service page. Use those screenshots as the primary visual design reference.

The website should NOT look like a generic AI-generated insurance website.

Recreate the visual hierarchy, spacing, typography, dark premium aesthetic, cards, buttons, sections, navigation, FAQ layout, CTA blocks, footer structure, and overall proportions shown in the provided Figma designs.

Do not copy the branding, text, logo, or proprietary content from another website. Create an original implementation based on the supplied design direction.

==================================================
TECHNOLOGY
==================================================

Use:

- React
- TypeScript
- Tailwind CSS
- React Router
- Lucide React icons or another lightweight icon library
- Component-based architecture
- Responsive design
- Semantic HTML
- Accessible interactive elements

Keep the code clean, reusable and production-ready.

Do NOT use a heavy UI component framework unless absolutely necessary.

Do NOT create a backend/database initially.

The website is primarily a marketing/information website.

All content should be stored in reusable data structures wherever practical so services and FAQ items can be updated easily.

==================================================
DESIGN DIRECTION
==================================================

Overall visual style:

- Premium
- Elegant
- Professional
- High-end insurance/financial advisory brand
- Dark luxury aesthetic
- Minimal
- Spacious
- Editorial typography
- Subtle gold accents
- Deep purple/black background

PRIMARY BACKGROUND:
Very dark almost-black purple.

Use approximately:

background:
#090612 / #0B0714

Secondary card background:
#11101F / #131022

Dark purple sections:
#160B24 / #1A0C2B

Gold accent:
#D8A83E

Orange/gold CTA gradient:
gold -> orange

Text:
Primary: warm white / off-white
Secondary: muted gray-purple
Accent: gold

Avoid bright white backgrounds.

Avoid excessive gradients.

Use subtle borders and very subtle shadows.

Cards should feel elegant rather than overly rounded.

Use moderate border radius, approximately 10-14px.

==================================================
TYPOGRAPHY
==================================================

The typography should closely follow the supplied Figma design.

Use an elegant serif font for:

- Main hero headlines
- Large section headings
- Major editorial headings

Use a clean modern sans-serif font for:

- Navigation
- Body text
- Buttons
- Labels
- Forms
- Supporting text

Recommended font combination:

Headings:
Cormorant Garamond or Playfair Display

Body:
Inter or DM Sans

Make the typography feel premium and editorial.

Large headlines should have:

- tight line-height
- slightly condensed visual appearance
- large desktop size
- responsive scaling on mobile

==================================================
GLOBAL HEADER
==================================================

Create a reusable Header component.

Desktop layout:

LEFT:
- Charlie M Richardson logo/brand area
- Small professional headshot/avatar image next to the company name

CENTER:
Navigation links:

Home
Services
About
Contact

RIGHT:
Phone number:

+1 714-809-6503

CTA button:

Get a Free Consultation

Header should be approximately 70-80px tall.

Background should match the dark page.

Use subtle bottom border.

Navigation should have elegant hover states.

Gold accent on hover.

==================================================
SERVICES MEGA MENU
==================================================

When the user hovers/clicks Services, display a premium mega menu similar to the Figma design.

Organize services into these groups:

Health/Medicare/Group
- Health, Medicare & Group Benefits
- Health Insurance
- Group Health & Employee Benefits
- Medicare Plans

Life & Family Protection
- Life Insurance
- Indexed Universal Life (IUL)

Retirement & Financial
- Retirement Planning

Disability & Income Protection
- Disability Insurance
- Business Owner Protection

The dropdown should:

- Have a dark purple background
- Have subtle border
- Have rounded corners
- Use gold section headings
- Use small elegant typography
- Be positioned below the Services navigation item
- Have smooth appearance transition
- Close when clicking elsewhere
- Work properly on mobile

==================================================
HOMEPAGE
==================================================

Create the following homepage sections in this order.

--------------------------------------------------
1. HERO
--------------------------------------------------

Full-width dark hero section.

Left-aligned content with generous spacing.

Small gold decorative horizontal line above the headline.

Small optional eyebrow text.

Main headline:

"Coverage in California.
Protection for What Matters."

Use a large elegant serif font.

Supporting paragraph:

"Life insurance is about your family keeping their lifestyle, your kids finishing college, your business staying afloat. Charlie M Richardson Insurance offers Indexed Universal Life (IUL), Term Life, Permanent Life, and complete family protection planning across California — comparing 30+ A-rated carriers to find the right policy at the right price."

Make this text slightly muted.

Hero buttons:

PRIMARY:
Get a Free Consultation →

SECONDARY:
Request a Quote

Beside/below buttons show:

☎ +1 714-809-6503

Primary CTA should use a gold/orange gradient.

Secondary CTA should be transparent with a subtle gold border.

Hero should be responsive.

Desktop:
Two-column or spacious left-aligned composition.

Mobile:
Stack content vertically.

--------------------------------------------------
2. TRUST / VALUE STRIP
--------------------------------------------------

Create four equal columns:

Free
Consultation

Regular
Support

One on one
Conversation

Reliable
Professional help

Use large elegant serif heading for the first line and small supporting text.

Add subtle horizontal separators.

--------------------------------------------------
3. SERVICES INTRODUCTION
--------------------------------------------------

Eyebrow:

WE SERVE

Heading:

"Services and offers
curated for your need"

Right side supporting paragraph:

"Life insurance is about your family keeping their lifestyle, your kids finishing college, your business staying afloat. Charlie M Richardson Insurance offers Indexed Universal Life (IUL), Term Life, Permanent Life, and complete family protection planning across California — comparing 30+ A-rated carriers to find the right policy at the right price."

Create six service cards.

Cards:

1. Health Insurance
2. Medicare Plans
3. Life Insurance
4. Retirement Planning
5. Disability Insurance
6. Business Owner Protection

Each card should include:

- Lucide icon
- Service title
- Short description
- Subtle hover animation
- Arrow/link on hover if appropriate

Card design should match the Figma:

Dark purple background
Subtle border
Rounded corners
Large internal padding
Muted body text
Elegant heading

Service cards should be clickable.

Routes:

/services/health-insurance
/services/medicare
/services/life-insurance
/services/retirement-planning
/services/disability-insurance
/services/business-owner-protection

--------------------------------------------------
4. CTA SECTION
--------------------------------------------------

Create a centered wide CTA card.

Eyebrow:

LET'S PROTECT

Heading:

"We can’t predict future,
but we can prepare"

Supporting text:

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"

Replace the lorem ipsum with polished insurance-related copy.

CTA:

Get a Free Consultation →

Below:

☎ Call (818) 389-7970

Use a dark purple card with a subtle purple/gold glow.

The CTA should feel premium.

--------------------------------------------------
5. OUR APPROACH
--------------------------------------------------

Eyebrow:

WHAT MAKES US APART

Heading:

"Our
Approach"

Right side supporting copy.

Then create two large expandable/content cards.

Card 1:

"What is Employee Benefits & Group Health Benefits"

Description explaining group health and employee benefits.

Card 2:

"How Indexed Universal Life (IUL) Can Be Helpful"

Description explaining IUL in simple, non-promotional language.

Cards should have subtle hover effects.

--------------------------------------------------
6. FAQ
--------------------------------------------------

Eyebrow:

FREQUENTLY ASKED QUESTIONS

Left:

"You Ask
We Answer"

Right:

Accordion FAQ.

Questions:

How do I choose the right coverage?

What affects my premium?

Will I need a medical exam?

Can you compare my insurance options?

How do I get a personalized plan?

Only one FAQ item should be expanded at a time.

Use plus/minus icons.

Animation should be smooth.

--------------------------------------------------
7. FINAL FOOTER
--------------------------------------------------

Create a large footer similar to the Figma.

Columns:

COLUMN 1:
Charlie M Richardson

Description:

"Charlie Richardson offering insurance for Health, Medicare, Disability, Retirement planning, Employee benefits and Business protection for individuals, families."

COLUMN 2:
Health/Medicare/Group

Links:

Health, Medicare & Group Benefits
Health Insurance
Group Health & Employee Benefits
Medicare Plans

COLUMN 3:
Life & Family Protection

Links:

Life Insurance
Indexed Universal Life (IUL)

COLUMN 4:
Disability & Income Protection

Links:

Disability Insurance
Business Owner Protection

COLUMN 5:
Stay Connected

Phone:
+1 714-809-6503

Email:
charlie@charlierichardson.com

Location:
California

Bottom:

© 2026 Charlie M Richardson.

Right side:

About
Services
Contact

==================================================
INNER SERVICE PAGE
==================================================

Create a reusable ServiceDetailPage component.

All service pages must share the same structure.

Example:

/services/health-insurance

--------------------------------------------------
INNER PAGE HERO
--------------------------------------------------

Eyebrow:

THE PROBLEM

Main heading:

"What's actually
going wrong with
your life insurance."

On the right side create a numbered list:

01
Coverage from work is not enough

Description:
Group life through your employer is usually 1x salary and disappears the day you leave. For most California families, that's a fraction of what's actually needed.

02
Your old term policy is about to expire

Description:
If your term is ending, re-shop early and lock new coverage before the gap.

03
You want both protection AND cash value growth

Description:
Indexed Universal Life (IUL) can provide lifetime life insurance protection along with potential cash value growth opportunities tied to market index performance.

04
You don't know how much your family really needs

Description:
We calculate exact coverage needs based on debt, income replacement, and future expenses like college and retirement.

Use gold numbers.

Create a premium editorial two-column layout.

--------------------------------------------------
CTA
--------------------------------------------------

Reuse the CTA card:

LET'S PROTECT

"We can’t predict future,
but we can prepare"

Get a Free Consultation →

☎ Call (818) 389-7970

--------------------------------------------------
SERVICE NAVIGATION
--------------------------------------------------

Eyebrow:

WHAT MAKES US APART

Show current service title on the left.

On the right create horizontal/stacked service navigation tabs:

Health Insurance
Group Health & Employee Benefits
Medicare Plans

For Life & Family Protection:

Health Insurance
Indexed Universal Life (IUL)
Retirement Planning
Disability & Income Protection
Disability Insurance
Business Owner Protection
Personal Insurance
Retirement Planning

Clicking a service should navigate to its corresponding page.

--------------------------------------------------
SERVICE FAQ
--------------------------------------------------

Eyebrow:

FREQUENTLY ASKED QUESTIONS

Heading:

"Health
Insurance"

(or current service name dynamically)

Create service-specific FAQ questions.

For Health Insurance:

Do you have active health insurance?

Is it employer-provided and continuing after closing?

Are you on disability or Social Security disability income?

Any major medical expenses expected in the next 12 months?

Will your premium subsidies continue for at least 12–36 months?

Use accordion behavior.

--------------------------------------------------
LIFE & FAMILY PROTECTION
--------------------------------------------------

Create a service-category navigation grid.

Cards:

Health Insurance
Indexed Universal Life (IUL)
Retirement Planning
Disability & Income Protection
Disability Insurance
Business Owner Protection
Personal Insurance
Retirement Planning

Each card should navigate to its appropriate service page.

--------------------------------------------------
FINAL CONTACT / QUOTE SECTION
--------------------------------------------------

Create a large final section.

Eyebrow:

FINAL WORD

Heading:

"Get your free life
insurance consultation.
Serving all of California."

Supporting text:

"One short conversation. Real options, real numbers. No pressure, no spam, no cost."

Contact information:

☎ +1 714-809-6503
✉ charlie@charlierichardson.com

Right side:

Create a premium quote/contact form.

Fields:

First Name
Last Name
Email
Phone Number
How can we help you today?

Textarea placeholder:
"Briefly explain what coverage you're looking for..."

CTA:

Request Your Free Quote

Below:

"Prefer to call? Reach us at +1 714-809-6503"

Form should have proper validation.

Since there is no backend initially, implement frontend validation and show a successful submission state without actually sending data.

Make the form structure ready for future API integration.

==================================================
SERVICE PAGES
==================================================

Create the following pages:

/services/health-insurance
/services/medicare
/services/life-insurance
/services/retirement-planning
/services/disability-insurance
/services/business-owner-protection

Also support:

/services/group-health
/services/iul
/services/personal-insurance

Use reusable service data.

Each service should have:

- Hero/problem section
- Service explanation
- Benefits/important considerations
- CTA
- Related services
- FAQ
- Quote form
- Footer

Do not duplicate components unnecessarily.

==================================================
RESPONSIVE DESIGN
==================================================

The website MUST be fully responsive.

Desktop:
1440px+
Use spacious layouts.

Tablet:
768px - 1199px

Mobile:
320px - 767px

On mobile:

- Hamburger menu
- Full-screen/mobile navigation
- Services mega menu becomes accordion
- Hero becomes single column
- Cards become one column
- Two-column sections become stacked
- FAQ becomes full width
- Contact form becomes single column
- Footer columns stack
- Buttons become appropriately sized
- No horizontal scrolling

Make sure typography scales smoothly.

==================================================
ANIMATIONS
==================================================

Use subtle premium animations only.

Examples:

- Fade/slide on section entrance
- Card hover elevation
- Button hover
- Navigation transitions
- FAQ expand/collapse
- Mega menu transition

Do NOT over-animate.

Do NOT use distracting parallax effects.

Keep the website fast.

==================================================
IMAGES / ASSETS
==================================================

I have exported assets from Figma.

Use the provided assets wherever appropriate.

Do NOT replace supplied images with random stock images if a matching supplied asset exists.

The small professional headshot next to "Charlie M Richardson" should be used in the header.

Use proper image optimization.

Use meaningful alt text.

==================================================
SEO
==================================================

Create SEO-friendly metadata for every page.

Homepage:

Title:
Charlie M Richardson | Life & Health Insurance in California

Description:
Insurance solutions for families, individuals and business owners across California, including life insurance, health insurance, Medicare, retirement and disability protection.

Service pages should have unique titles and descriptions.

Use:

- Semantic HTML
- One H1 per page
- Proper H2/H3 hierarchy
- Descriptive links
- Image alt text
- Canonical-friendly routing structure

==================================================
ACCESSIBILITY
==================================================

Follow accessibility best practices.

Requirements:

- Keyboard accessible navigation
- Visible focus states
- Proper button elements
- ARIA attributes for accordions
- Accessible form labels
- Sufficient contrast
- Alt text
- Mobile navigation accessible by keyboard

==================================================
CODE ARCHITECTURE
==================================================

Use a clean architecture similar to:

src/
  components/
    Header.tsx
    Footer.tsx
    Hero.tsx
    ServiceCard.tsx
    ServiceGrid.tsx
    CTASection.tsx
    FAQ.tsx
    ServiceNavigation.tsx
    QuoteForm.tsx
    TrustStrip.tsx

  pages/
    Home.tsx
    About.tsx
    Contact.tsx
    Services.tsx
    ServiceDetail.tsx

  data/
    services.ts
    faqs.ts

  layouts/
    MainLayout.tsx

  routes/

Use reusable components instead of copying entire page structures.

Service detail pages should be generated from service data.

==================================================
IMPORTANT CONTENT RULES
==================================================

Company:
Charlie M Richardson

Location:
California

Phone:
+1 714-809-6503

Email:
charlie@charlierichardson.com

Do not use the reference company's name anywhere.

Do not use "SDIA Insurance" anywhere.

Do not use fake testimonials unless clearly marked as placeholder content.

Do not make unsupported claims such as "best insurance company", "guaranteed savings", etc.

Insurance content should be professional and informational.

==================================================
FINAL QUALITY REQUIREMENTS
==================================================

Before considering the implementation complete:

1. Check every navigation link.
2. Check every service link.
3. Check every FAQ accordion.
4. Check mobile navigation.
5. Check Services mega menu.
6. Check quote form validation.
7. Check responsive behavior.
8. Check typography.
9. Check spacing against the supplied Figma.
10. Check that no horizontal scrolling exists.
11. Check that buttons have hover/focus states.
12. Check that all routes load correctly.
13. Check that the header/footer are consistent across all pages.
14. Check that the design looks premium rather than like a generic template.

Most importantly:

MATCH THE PROVIDED FIGMA DESIGN.

The Figma screenshots are the visual source of truth for layout and styling.

Do not simplify the design into a generic landing page.

Build the website as a polished production-quality insurance website.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9cb844ad-62e2-4ae5-ae72-85c6bd622535).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
