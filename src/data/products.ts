export interface Product {
  slug: string;
  title: string;
  short: string;
  long: string;
  whatsInside: string[];
  whoItsFor: string;
  howToUse: string[];
  printNotes: string[];
  pages: number;
  format: string;
  price: string;
  numericPrice: string;
  gumroadUrl: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  status: "draft" | "live";
}

export const products: Product[] = [
  {
    slug: "caregiver-handover-sheet",
    title: "Caregiver Handover Sheet",
    short:
      "A clear, large-print daily and weekly sheet so siblings, relatives, and helpers can pass the baton without missed details.",
    long:
      "When more than one person helps an aging parent during the week, small everyday details get lost in text threads. The Caregiver Handover Sheet gives your family one calm place on the kitchen counter to write down what happened today, what is coming up this week, and what the next person arriving needs to know right away.",
    whatsInside: [
      "Daily routine snapshot page with wide handwriting boxes for morning, afternoon, and evening notes",
      "Weekly shift handover log showing who is visiting on each day and what errands or chores are planned",
      "Appointments and rides tracker with space for date, time, place, driver name, and questions to ask",
      "Household supplies and groceries checklist so the next visitor knows what needs picking up",
      "Visitor notes page with roomy lines for simple updates you want everyone in the family to see",
    ],
    whoItsFor:
      "Adult sons and daughters sharing care with siblings, a spouse, a neighbor, or a daytime helper who want one shared paper log in the house.",
    howToUse: [
      "Print the sheets at 100% scale on regular US Letter paper and clip them to a clipboard or place them in a kitchen binder.",
      "Spend two minutes at the end of each visit jotting down key updates in plain pen before you head home.",
      "When the next sibling or helper arrives, they read the top sheet first so nobody has to repeat the same phone update three times.",
    ],
    printNotes: [
      "Prints cleanly in black and white on any home inkjet or laser printer.",
      "Designed for standard US Letter paper (8.5 x 11 inches) at 100% actual size.",
      "Extra-wide writing boxes and dark lines make it comfortable for eyes aged 70 and up to read at arm's length.",
    ],
    pages: 8,
    format: "PDF, US Letter, prints in black & white",
    price: "$29",
    numericPrice: "29.00",
    gumroadUrl: "https://caringforagingparents.gumroad.com/l/caregiver-handover-sheet",
    image: "/images/products/handover-sheet.webp",
    imageWidth: 1200,
    imageHeight: 1200,
    imageAlt:
      "Top-down illustration of the large-print Caregiver Handover Sheet on a wooden desk with a pen beside it.",
    status: "live",
  },
  {
    slug: "who-to-call-sheet",
    title: "Who-to-Call Sheet",
    short:
      "A large-print phone directory for the fridge or telephone table so anyone in the house knows who to call first.",
    long:
      "Phones lock, batteries die, and tiny contact lists on a screen are hard to search when someone is flustered. The Who-to-Call Sheet puts your family's essential everyday names and phone numbers in bold, easy-to-read boxes right by the landline or on the refrigerator.",
    whatsInside: [
      "One-page fridge directory with large, high-contrast boxes for family members and nearby neighbors",
      "Everyday services directory for the plumber, electrician, handyman, snow removal, and yard help",
      "Local offices directory with space for names, addresses, and phone numbers of clinics and pharmacies",
      "Out-of-town family contact sheet with time zones and best hours to reach each relative",
      "Blank extra-large contact cards you can print as many times as you need when numbers change",
    ],
    whoItsFor:
      "Parents aged 70+ who prefer reading numbers off a clear sheet of paper, and adult children who want neighbors or visitors to have the right phone numbers in plain sight.",
    howToUse: [
      "Print two copies: tape one inside a kitchen cabinet or on the fridge, and keep the second copy in your main family binder.",
      "Fill in the names, relationships, and phone numbers using a dark rollerball or felt-tip pen.",
      "Snap a quick photo on your phone once it is filled in so you have a copy with you when you are away from the house.",
    ],
    printNotes: [
      "Formatted for US Letter paper (8.5 x 11 inches) in high-contrast black and white.",
      "Use slightly heavier paper (24 lb or 28 lb) if you plan to post the sheet on the refrigerator door.",
      "Always print at 100% scale so the writing boxes stay full size.",
    ],
    pages: 6,
    format: "PDF, US Letter, prints in black & white",
    price: "$29",
    numericPrice: "29.00",
    gumroadUrl: "https://caringforagingparents.gumroad.com/l/who-to-call-sheet",
    image: "/images/products/who-to-call.webp",
    imageWidth: 1200,
    imageHeight: 1200,
    imageAlt:
      "Top-down illustration of the Who-to-Call Sheet showing large contact boxes on a wooden desk with a pen.",
    status: "live",
  },
  {
    slug: "where-everything-is-organizer",
    title: "Where-Everything-Is Organizer",
    short:
      "A plain-English pointer guide to record WHERE household items, keys, folders, and bills are kept—without ever writing down passwords or account numbers.",
    long:
      "In almost every family, one parent knows which drawer holds the spare house keys, which file folder has the car title, and which company sends the water bill. The Where-Everything-Is Organizer helps you write down physical locations and company names safely on paper—with strict reminders never to write down PINs, passwords, or account numbers.",
    whatsInside: [
      "Spare keys and household access map (where spare house, car, mailbox, and shed keys are stored)",
      "File cabinet and folder pointer sheet (which room, drawer, or binder holds household records)",
      "Utilities and home services list (company name, service type, and how statements arrive—no account numbers)",
      "Banking and institución pointer page (institution name and branch town only—explicitly no account numbers or PINs)",
      "Home maintenance and appliance shut-off guide (where the main water valve, fuse box, and manuals are located)",
      "Safe-keeping checklist explaining how to store this binder in a private spot inside the home",
    ],
    whoItsFor:
      "Families who want to sit down over a cup of tea and write down where important household folders and keys live before an unexpected trip or hospital stay happens.",
    howToUse: [
      "Sit down together for 20 minutes and fill in one page at a time—starting with easy things like spare keys and utility companies.",
      "Write only physical locations (for example, 'Top desk drawer in den, green folder') and company names.",
      "Never write passwords, PINs, Social Security numbers, or account numbers on these sheets.",
    ],
    printNotes: [
      "Prints in crisp black and white on standard US Letter paper (8.5 x 11 inches).",
      "Three-hole punch margin spacing included on the left edge so pages fit neatly into a standard ring binder without cutting off text.",
      "Set printer scaling to 100% (Actual Size) for full-height handwriting rows.",
    ],
    pages: 12,
    format: "PDF, US Letter, prints in black & white",
    price: "$29",
    numericPrice: "29.00",
    gumroadUrl: "https://caringforagingparents.gumroad.com/l/where-everything-is-organizer",
    image: "/images/products/where-everything-is.webp",
    imageWidth: 1200,
    imageHeight: 1200,
    imageAlt:
      "Top-down illustration of the Where-Everything-Is Organizer sheet with location rows on a desk beside a pen.",
    status: "live",
  },
];
