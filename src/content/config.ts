import { defineCollection, z } from 'astro:content';

const serviceItemSchema = z.object({
  number: z.string(),
  title: z.string(),
  body: z.string(),
  price: z.string().optional()
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    industry: z.string(),
    companySize: z.string(),
    location: z.string(),
    cost: z.string(),
    year: z.string(),
    time: z.string(),
    image: z.string(),
    fullImage: z.string().optional(),
    ribbon: z.string(),
    tags: z.array(z.string()),
    order: z.number()
  })
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    intro: z.string(),
    services: z.array(serviceItemSchema),
    order: z.number()
  })
});

const creations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    body: z.string(),
    cta: z.string(),
    href: z.string(),
    secondaryCta: z.string().optional(),
    secondaryHref: z.string().optional(),
    image: z.string(),
    fullImage: z.string().optional(),
    alt: z.string(),
    order: z.number()
  })
});

const presentations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    href: z.string().optional(),
    date: z.string().optional(),
    order: z.number()
  })
});

const legal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    paragraphs: z.array(z.string()),
    order: z.number()
  })
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    lede: z.string(),
    paragraphs: z.array(z.string()),
    intro: z.string(),
    summary: z.string(),
    image: z.string(),
    backHref: z.string(),
    cta: z.string().optional(),
    href: z.string().optional(),
    order: z.number(),
    failureDiagram: z
      .object({
        sourceLabel: z.string(),
        resultLabel: z.string(),
        source: z.string(),
        result: z.string()
      })
      .optional()
  })
});

export const collections = {
  portfolio,
  services,
  creations,
  presentations,
  legal,
  'case-studies': caseStudies
};
