import {
  Stethoscope,
  ShieldCheck,
  PiggyBank,
  Accessibility,
  Building2,
  Users,
  TrendingUp,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { HealthInsuranceIcon } from "@/components/icons/HealthInsuranceIcon";
import type { FaqItem } from "./faqs";

export type Service = {
  slug: string;
  title: string;
  cardDescription: string;
  icon: LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;
  metaTitle: string;
  metaDescription: string;
  problemHeading: string[];
  problems: { title: string; body: string }[];
  explanation: { heading: string; body: string[] };
  considerations: string[];
  faqs: FaqItem[];
  featured?: boolean;
};

const lifeProblems = [
  {
    title: "Coverage from work is not enough",
    body: "Group life through your employer is usually 1x salary and disappears the day you leave. For most California families, that's a fraction of what's actually needed.",
  },
  {
    title: "Your old term policy is about to expire",
    body: "If your term is ending, re-shop early and lock new coverage before the gap.",
  },
  {
    title: "You want both protection AND cash value growth",
    body: "Indexed Universal Life (IUL) can provide lifetime life insurance protection along with potential cash value growth opportunities tied to market index performance.",
  },
  {
    title: "You don't know how much your family really needs",
    body: "We calculate exact coverage needs based on debt, income replacement, and future expenses like college and retirement.",
  },
];

export const services: Service[] = [
  {
    slug: "health-insurance",
    title: "Health Insurance",
    icon: HealthInsuranceIcon,
    featured: true,
    cardDescription:
      "Individual and family medical plans compared across California carriers, networks and subsidy eligibility.",
    metaTitle: "Health Insurance in California | Charlie M Richardson",
    metaDescription:
      "Compare individual and family health insurance plans across California carriers, networks and subsidy options with Charlie M Richardson.",
    problemHeading: ["What's actually", "going wrong with", "your health coverage."],
    problems: [
      {
        title: "Your plan network doesn't include your doctors",
        body: "Premium alone is a poor way to pick a plan. We check that your physicians and hospitals are in-network before you enroll.",
      },
      {
        title: "You're paying for a tier you don't use",
        body: "Deductible, coinsurance and prescription tiers should match how you actually use care during the year.",
      },
      {
        title: "You may qualify for subsidies you never claimed",
        body: "Household income and family size can change marketplace subsidy eligibility. We check it at every renewal.",
      },
      {
        title: "A life change left you with a coverage gap",
        body: "Leaving a job, turning 26, moving or a new baby opens a special enrollment window with a deadline worth meeting.",
      },
    ],
    explanation: {
      heading: "Health insurance, explained without the jargon",
      body: [
        "Health insurance pays a defined share of your medical costs in exchange for a monthly premium. What varies between plans is the network of providers, the deductible you pay before cost sharing begins, and how prescriptions are tiered.",
        "We compare marketplace and off-exchange plans from California carriers, confirm your providers are covered, and check subsidy eligibility so you see the true monthly cost rather than the sticker price.",
      ],
    },
    considerations: [
      "Confirm your doctors and hospitals are in-network",
      "Compare total annual cost, not just the premium",
      "Check prescription tiers for medications you take",
      "Review subsidy eligibility at every renewal",
    ],
    faqs: [
      {
        question: "Do you have active health insurance?",
        answer:
          "If you do, bring the current plan summary. We compare it against available options so any change is a measured upgrade rather than a guess.",
      },
      {
        question: "Is it employer-provided and continuing after closing?",
        answer:
          "Employer coverage often ends with employment. We confirm the end date and line up individual coverage that starts the day after, so there is no gap.",
      },
      {
        question: "Are you on disability or Social Security disability income?",
        answer:
          "Disability status can affect Medicare eligibility and marketplace options. We review which program fits your situation and timeline.",
      },
      {
        question: "Any major medical expenses expected in the next 12 months?",
        answer:
          "Planned surgery, a pregnancy or ongoing specialist care changes which deductible and coinsurance structure costs you least over the full year.",
      },
      {
        question: "Will your premium subsidies continue for at least 12–36 months?",
        answer:
          "Subsidies follow projected household income. We look at expected earnings so your plan stays affordable beyond the first few months.",
      },
    ],
  },
  {
    slug: "medicare",
    title: "Medicare Plans",
    icon: Stethoscope,
    featured: true,
    cardDescription:
      "Medicare Advantage, Supplement and Part D options reviewed against your doctors and prescriptions.",
    metaTitle: "Medicare Plans in California | Charlie M Richardson",
    metaDescription:
      "Medicare Advantage, Medigap Supplement and Part D plans compared for California residents, with enrollment timing guidance.",
    problemHeading: ["What's actually", "going wrong with", "your Medicare plan."],
    problems: [
      {
        title: "You missed an enrollment window",
        body: "Initial, annual and special enrollment periods each have deadlines, and late enrollment can carry a lifetime penalty.",
      },
      {
        title: "Your Part D plan doesn't cover your prescriptions well",
        body: "Formularies change every year. A plan that was ideal last year can become the most expensive option this year.",
      },
      {
        title: "You're unsure between Advantage and Supplement",
        body: "One trades a network for lower premiums, the other trades higher premiums for broader provider freedom. The right answer depends on how you use care.",
      },
      {
        title: "You never reviewed the plan after enrolling",
        body: "An annual review takes one conversation and often finds a plan that better matches this year's medications and doctors.",
      },
    ],
    explanation: {
      heading: "Choosing between Advantage, Supplement and Part D",
      body: [
        "Original Medicare covers hospital and medical services but leaves cost sharing in place. You close those gaps either with a Medicare Advantage plan or with a Medigap Supplement plus a stand-alone Part D drug plan.",
        "We run your prescriptions and providers through the available California plans and show what each option costs across a full year, not just the monthly premium.",
      ],
    },
    considerations: [
      "Enrollment periods and possible late penalties",
      "Whether your prescriptions sit on the plan formulary",
      "Provider network breadth versus monthly premium",
      "Annual review before each plan year begins",
    ],
    faqs: [
      {
        question: "When should I start looking at Medicare?",
        answer:
          "About three months before you turn 65, or before employer coverage ends if you are working past 65.",
      },
      {
        question: "What is the difference between Advantage and Supplement?",
        answer:
          "Advantage bundles coverage through a network-based plan, often with extra benefits. A Supplement pays a share of Original Medicare's out-of-pocket costs and keeps broad provider access, usually with a higher premium.",
      },
      {
        question: "Do I need a separate drug plan?",
        answer:
          "With a Supplement, usually yes. Many Advantage plans include drug coverage. We confirm your medications are covered either way.",
      },
      {
        question: "Can I change plans later?",
        answer:
          "Advantage and Part D plans can generally be changed during the annual enrollment period. Supplement changes may involve medical underwriting.",
      },
      {
        question: "Is there a cost to work with you?",
        answer: "No. Consultations and plan comparisons are free.",
      },
    ],
  },
  {
    slug: "life-insurance",
    title: "Life Insurance",
    icon: ShieldCheck,
    featured: true,
    cardDescription:
      "Term, Whole and Permanent Life options for estate planning, income replacement and guaranteed protection.",
    metaTitle: "Life Insurance in California | Charlie M Richardson",
    metaDescription:
      "Term, whole and permanent life insurance for California families and business owners, compared across 30+ A-rated carriers.",
    problemHeading: ["What's actually", "going wrong with", "your life insurance."],
    problems: lifeProblems,
    explanation: {
      heading: "Term, whole and permanent coverage",
      body: [
        "Term life covers a set number of years at the lowest cost per dollar of protection, which suits mortgage years and income replacement while children are at home. Permanent coverage lasts for life and builds cash value over time.",
        "We size the death benefit against your debt, income and future obligations, then compare carriers so the same coverage is not overpriced.",
      ],
    },
    considerations: [
      "Coverage amount based on real obligations, not a rule of thumb",
      "Term length matched to your mortgage and children's ages",
      "Carrier financial strength ratings",
      "Conversion options if your needs change later",
    ],
    faqs: [
      {
        question: "How much life insurance do I actually need?",
        answer:
          "We total outstanding debt, years of income to replace, education costs and final expenses, then subtract existing coverage and savings.",
      },
      {
        question: "Is term or permanent coverage better?",
        answer:
          "Term is the most cost-effective way to cover a defined period. Permanent coverage suits lifetime needs such as estate planning or a special-needs dependent. Many families use both.",
      },
      {
        question: "Can I keep coverage if I change jobs?",
        answer:
          "An individual policy belongs to you and follows you between employers, unlike group coverage that ends with the job.",
      },
      {
        question: "What if I have a health condition?",
        answer:
          "Carriers underwrite conditions very differently. Placing the application with the right carrier often makes a large difference in price.",
      },
      {
        question: "How long does approval take?",
        answer:
          "Accelerated underwriting can approve qualifying applicants in days. Fully underwritten cases typically take a few weeks.",
      },
    ],
  },
  {
    slug: "retirement-planning",
    title: "Retirement Planning",
    icon: PiggyBank,
    featured: true,
    cardDescription:
      "Annuity and income strategies designed to turn savings into predictable retirement cash flow.",
    metaTitle: "Retirement Planning in California | Charlie M Richardson",
    metaDescription:
      "Retirement income strategies, annuities and rollovers reviewed for California families planning predictable retirement cash flow.",
    problemHeading: ["What's actually", "going wrong with", "your retirement plan."],
    problems: [
      {
        title: "You have savings but no income plan",
        body: "A balance is not a paycheck. The sequence in which you draw accounts changes how long the money lasts.",
      },
      {
        title: "Old employer accounts are scattered",
        body: "Orphaned 401(k)s from previous jobs often sit in default investments with fees nobody is watching.",
      },
      {
        title: "A market drop early in retirement could hurt",
        body: "Withdrawals during a downturn compound the loss. A portion of guaranteed income reduces that pressure.",
      },
      {
        title: "You are unsure when to claim Social Security",
        body: "Claiming age changes lifetime benefits significantly, and the right timing depends on health, spouse and other income.",
      },
    ],
    explanation: {
      heading: "Building income you can count on",
      body: [
        "Retirement planning here means converting accumulated savings into reliable monthly income while managing longevity, taxes and market risk.",
        "We review existing accounts, discuss where guaranteed income products such as annuities may fit alongside your investments, and explain the fees and surrender terms in plain language.",
      ],
    },
    considerations: [
      "Guaranteed income floor versus market exposure",
      "Rollover options for old employer plans",
      "Product fees, surrender periods and liquidity",
      "Tax treatment of each income source",
    ],
    faqs: [
      {
        question: "When should I start planning?",
        answer:
          "Ten years out gives the most flexibility, but a plan built five years out or at retirement still improves outcomes.",
      },
      {
        question: "Are annuities right for everyone?",
        answer:
          "No. They suit people who want a guaranteed income floor and can accept limited liquidity. We explain the trade-offs before anything is recommended.",
      },
      {
        question: "Can I roll over an old 401(k)?",
        answer:
          "Usually yes. We compare staying in the plan, rolling to an IRA, and other options with the costs of each.",
      },
      {
        question: "How do you get paid?",
        answer:
          "Carriers pay commission on placed products. Your consultation and comparison cost nothing.",
      },
      {
        question: "Do you coordinate with my accountant?",
        answer:
          "Yes. Tax treatment matters, and we are glad to work alongside your tax professional.",
      },
    ],
  },
  {
    slug: "disability-insurance",
    title: "Disability Insurance",
    icon: Accessibility,
    featured: true,
    cardDescription:
      "Income protection that keeps paying if illness or injury stops you from working.",
    metaTitle: "Disability Insurance in California | Charlie M Richardson",
    metaDescription:
      "Short and long-term disability income protection for California professionals, business owners and self-employed workers.",
    problemHeading: ["What's actually", "going wrong with", "your income protection."],
    problems: [
      {
        title: "State disability benefits replace only part of your pay",
        body: "For most households the gap between the benefit and actual expenses is significant and lasts as long as the disability.",
      },
      {
        title: "Group coverage may stop at the office door",
        body: "Employer disability plans often end when the job does, and benefits are usually taxable when the employer pays the premium.",
      },
      {
        title: "The definition of disability matters more than the price",
        body: "An own-occupation definition protects your specific profession. A weaker definition can deny a claim you expected to be covered.",
      },
      {
        title: "Self-employed income has no safety net",
        body: "Without an employer plan, an individual policy is the only thing standing between an injury and lost revenue.",
      },
    ],
    explanation: {
      heading: "Protecting the income everything else depends on",
      body: [
        "Disability insurance replaces a percentage of your income when illness or injury prevents you from working. Short-term policies bridge weeks or months; long-term policies can run to retirement age.",
        "We compare definitions of disability, elimination periods, benefit periods and riders so the policy pays in the situations you actually worry about.",
      ],
    },
    considerations: [
      "Own-occupation versus any-occupation definitions",
      "Elimination period and benefit period length",
      "Whether benefits are taxable",
      "Residual and cost-of-living riders",
    ],
    faqs: [
      {
        question: "How much of my income can be covered?",
        answer:
          "Carriers typically replace roughly 60 percent of gross income, and benefits from a personally paid policy are generally received tax free.",
      },
      {
        question: "Isn't state disability enough?",
        answer:
          "State programs are time limited and capped. Most professionals need private coverage on top.",
      },
      {
        question: "What is an elimination period?",
        answer:
          "The waiting time before benefits begin, commonly 30 to 90 days. A longer wait lowers the premium.",
      },
      {
        question: "Can self-employed people get coverage?",
        answer:
          "Yes, with income documented through tax returns. This is one of the most common cases we place.",
      },
      {
        question: "Does it cover mental health conditions?",
        answer:
          "Many policies do, sometimes with a limited benefit period. We flag those limits before you apply.",
      },
    ],
  },
  {
    slug: "business-owner-protection",
    title: "Business Owner Protection",
    icon: Building2,
    featured: true,
    cardDescription:
      "Key person, buy-sell funding and executive benefit strategies for California business owners.",
    metaTitle: "Business Owner Insurance in California | Charlie M Richardson",
    metaDescription:
      "Key person coverage, buy-sell funding and executive benefits for California business owners and partnerships.",
    problemHeading: ["What's actually", "going wrong with", "your business continuity."],
    problems: [
      {
        title: "The business depends on one or two people",
        body: "If a key person is gone, revenue, lender confidence and client relationships can go with them.",
      },
      {
        title: "There is no funded buy-sell agreement",
        body: "An agreement without funding leaves surviving partners negotiating with a family instead of executing a plan.",
      },
      {
        title: "Bank covenants require coverage you don't have",
        body: "Many commercial loans require life insurance on the principal. Missing it can complicate financing.",
      },
      {
        title: "Key employees have no reason to stay",
        body: "Executive benefit arrangements can reward the people your business cannot afford to lose.",
      },
    ],
    explanation: {
      heading: "Keeping the business standing when a person is not",
      body: [
        "Business protection uses life and disability coverage to fund the events that would otherwise force a sale or a shutdown: the loss of an owner, the loss of a key producer, or a partner's exit.",
        "We coordinate with your attorney and accountant so the coverage amounts match the agreements on paper.",
      ],
    },
    considerations: [
      "Valuation used to size buy-sell funding",
      "Key person coverage on revenue-critical staff",
      "Loan and lender coverage requirements",
      "Executive benefit arrangements for retention",
    ],
    faqs: [
      {
        question: "What is key person insurance?",
        answer:
          "A policy the business owns on an individual whose loss would materially hurt revenue. The business receives the benefit and uses it to stabilise operations.",
      },
      {
        question: "How is a buy-sell agreement funded?",
        answer:
          "Usually with life insurance on each owner so the surviving owners have the cash to purchase the departing owner's share at the agreed value.",
      },
      {
        question: "Can premiums be paid by the business?",
        answer:
          "Often yes, though tax treatment varies by structure. We review it with your accountant.",
      },
      {
        question: "Do you work with partnerships and S-corps?",
        answer: "Yes, along with sole proprietors and family-owned businesses.",
      },
      {
        question: "What if ownership changes?",
        answer:
          "Coverage should be reviewed whenever ownership, valuation or debt changes materially.",
      },
    ],
  },
  {
    slug: "group-health",
    title: "Group Health & Employee Benefits",
    icon: Users,
    cardDescription:
      "Employer-sponsored medical, dental, vision and supplemental benefits built around your team.",
    metaTitle: "Group Health & Employee Benefits California | Charlie M Richardson",
    metaDescription:
      "Employer-sponsored group health, dental, vision and supplemental employee benefits for California businesses.",
    problemHeading: ["What's actually", "going wrong with", "your benefits package."],
    problems: [
      {
        title: "Renewal increases arrive with no alternatives",
        body: "A renewal letter is a starting point, not a verdict. We market the group before you accept an increase.",
      },
      {
        title: "The plan design doesn't match the workforce",
        body: "A young team and a senior team need different tiers, networks and contribution structures.",
      },
      {
        title: "Employees don't understand what they have",
        body: "Benefits only retain staff when people can explain them. Enrollment support matters.",
      },
      {
        title: "Compliance details fall through the cracks",
        body: "Eligibility rules, notices and filings need an owner. We keep the calendar visible.",
      },
    ],
    explanation: {
      heading: "Benefits your team understands and your budget survives",
      body: [
        "Group benefits combine medical coverage with dental, vision, life and supplemental products under an employer-sponsored plan. Design choices around contribution levels and plan tiers drive both cost and satisfaction.",
        "We market the group across carriers each year, present options side by side, and run enrollment meetings so employees actually use what you are paying for.",
      ],
    },
    considerations: [
      "Contribution strategy and employee cost share",
      "Network fit for where your team lives",
      "Ancillary lines such as dental, vision and life",
      "Enrollment communication and compliance calendar",
    ],
    faqs: [
      {
        question: "How small can a group be?",
        answer: "Many California carriers write groups starting at two enrolled employees.",
      },
      {
        question: "When can we change carriers?",
        answer:
          "Typically at renewal, though certain qualifying events allow a mid-year change. We plan the marketing 60 to 90 days ahead.",
      },
      {
        question: "Do you help with employee enrollment?",
        answer: "Yes, including group meetings and one-on-one sessions.",
      },
      {
        question: "Can we offer dental and vision only?",
        answer: "Yes. Ancillary-only packages are a common starting point for smaller teams.",
      },
      {
        question: "Is there a fee for your service?",
        answer: "No. We are compensated by the carrier on placed business.",
      },
    ],
  },
  {
    slug: "iul",
    title: "Indexed Universal Life (IUL)",
    icon: TrendingUp,
    cardDescription:
      "Permanent protection with cash value crediting tied to index performance, subject to caps and floors.",
    metaTitle: "Indexed Universal Life (IUL) California | Charlie M Richardson",
    metaDescription:
      "How Indexed Universal Life works in California: lifetime protection, index-linked cash value, caps, floors and real costs explained.",
    problemHeading: ["What's actually", "going wrong with", "your permanent policy."],
    problems: [
      {
        title: "The illustration was never explained",
        body: "Illustrated rates are not guarantees. We read the guaranteed column with you, not just the projection.",
      },
      {
        title: "Funding levels are too thin",
        body: "An underfunded policy can lapse later, exactly when replacing coverage is most expensive.",
      },
      {
        title: "Caps and participation rates were ignored",
        body: "These terms determine how much index performance is actually credited to your cash value.",
      },
      {
        title: "Nobody reviews the policy annually",
        body: "Costs, crediting and funding all shift over time. An annual statement review keeps it on track.",
      },
    ],
    explanation: {
      heading: "What an IUL does and does not do",
      body: [
        "An Indexed Universal Life policy provides a death benefit for life as long as it stays funded, with a cash value component credited based on the performance of a chosen index, limited by a cap and protected by a floor.",
        "It is not a market investment and it is not a substitute for a retirement account. Used properly, it can complement them. We show guaranteed and non-guaranteed figures side by side before you decide.",
      ],
    },
    considerations: [
      "Guaranteed versus illustrated values",
      "Cap, floor and participation rate mechanics",
      "Policy charges and funding requirements",
      "Access to cash value through loans and withdrawals",
    ],
    faqs: [
      {
        question: "Is an IUL an investment?",
        answer:
          "No. It is life insurance with an index-linked crediting method. Values are subject to policy charges and carrier terms.",
      },
      {
        question: "What happens in a down market?",
        answer:
          "The floor limits index-linked crediting losses, though policy charges continue to apply.",
      },
      {
        question: "Can I access the cash value?",
        answer:
          "Typically through loans or withdrawals, which reduce the death benefit and can affect policy performance.",
      },
      {
        question: "Who is it usually suited to?",
        answer:
          "People who want lifetime coverage, already fund their retirement accounts, and can commit to consistent premiums.",
      },
      {
        question: "How do I know if mine is on track?",
        answer: "Bring your annual statement. We review funding and projected values at no cost.",
      },
    ],
  },
  {
    slug: "personal-insurance",
    title: "Personal Insurance",
    icon: UserRound,
    cardDescription:
      "Individual coverage reviews across life, health and income protection for one household.",
    metaTitle: "Personal Insurance Review California | Charlie M Richardson",
    metaDescription:
      "A single household review across life, health, disability and Medicare coverage for individuals and families in California.",
    problemHeading: ["What's actually", "going wrong with", "your personal coverage."],
    problems: [
      {
        title: "Policies were bought one at a time",
        body: "Coverage collected over years often overlaps in places and leaves gaps in others.",
      },
      {
        title: "Beneficiaries are out of date",
        body: "Marriage, divorce and births all change who should receive a benefit. Paperwork rarely keeps up.",
      },
      {
        title: "Nobody has looked at the whole picture",
        body: "Life, health, disability and retirement decisions interact. Reviewing them together produces better answers.",
      },
      {
        title: "You're paying for coverage you no longer need",
        body: "As debt clears and children become independent, some coverage can be reduced or redirected.",
      },
    ],
    explanation: {
      heading: "One review across everything you hold",
      body: [
        "A personal insurance review looks at every policy in the household at once: life, health, disability, Medicare and retirement income.",
        "The output is a simple written summary showing what you have, what it costs, where the gaps are, and what to do first.",
      ],
    },
    considerations: [
      "Total household coverage versus total obligations",
      "Beneficiary designations on every policy",
      "Overlap between employer and individual coverage",
      "Priority order for any changes",
    ],
    faqs: [
      {
        question: "What should I bring to a review?",
        answer: "Current policy summaries or declaration pages, and any employer benefits guide.",
      },
      {
        question: "How long does it take?",
        answer: "Most reviews take one conversation of about 30 to 45 minutes.",
      },
      {
        question: "Will you tell me to replace everything?",
        answer:
          "No. Keeping existing coverage is often the right recommendation, and we will say so.",
      },
      {
        question: "Do you serve all of California?",
        answer: "Yes, by phone, video, or in person where practical.",
      },
      {
        question: "Is the review free?",
        answer: "Yes, with no obligation.",
      },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const featuredServices = services.filter((s) => s.featured);

export type MenuGroup = { heading: string; items: { label: string; slug: string }[] };

export const serviceMenu: MenuGroup[] = [
  {
    heading: "Health/Medicare/Group",
    items: [
      { label: "Health, Medicare & Group Benefits", slug: "health-insurance" },
      { label: "Health Insurance", slug: "health-insurance" },
      { label: "Group Health & Employee Benefits", slug: "group-health" },
      { label: "Medicare Plans", slug: "medicare" },
    ],
  },
  {
    heading: "Life & Family Protection",
    items: [
      { label: "Life Insurance", slug: "life-insurance" },
      { label: "Indexed Universal Life (IUL)", slug: "iul" },
    ],
  },
  {
    heading: "Retirement & Financial",
    items: [{ label: "Retirement Planning", slug: "retirement-planning" }],
  },
  {
    heading: "Disability & Income Protection",
    items: [
      { label: "Disability Insurance", slug: "disability-insurance" },
      { label: "Business Owner Protection", slug: "business-owner-protection" },
    ],
  },
];

export const relatedServiceGrid = [
  { label: "Health Insurance", slug: "health-insurance" },
  { label: "Indexed Universal Life (IUL)", slug: "iul" },
  { label: "Retirement Planning", slug: "retirement-planning" },
  { label: "Disability & Income Protection", slug: "disability-insurance" },
  { label: "Disability Insurance", slug: "disability-insurance" },
  { label: "Business Owner Protection", slug: "business-owner-protection" },
  { label: "Personal Insurance", slug: "personal-insurance" },
  { label: "Group Health & Employee Benefits", slug: "group-health" },
];
