---
title: "Dealyzer | AI-assisted due diligence"
client: "Dealyzer"
lede: "At WELL Health Technologies, I helped build an AI-assisted due diligence application that turned deal documents into structured findings reviewers could trace back to the source."
intro: "From a deal data room to reviewable findings and a weighted scorecard."
summary: "How I built document intake, structured extraction, and review workflows for an AI-assisted diligence product."
image: "/assets/case-studies/dealyzer/scorecard.png"
backHref: "/portfolio"
order: 3
featured: true
paragraphs: []
---

## The problem

Due diligence teams work across agreements, financial statements, and operational records. Pulling facts out of those files is only the first step. A reviewer needs to see where a finding came from, check it against the document, and understand how it informs the overall assessment.

## What I built

As an AI Platform Engineer, I drove engineering work on Dealyzer from early document categorization through a broader diligence workflow. My contributions included document intake, structured extraction, PDF reporting, and a weighted scorecard. The product brought that work into a deal workspace where reviewers could follow findings back to their evidence.

## Turning findings into an assessment

The weighted scorecard is where the diligence work comes together. Reviewers can scan the overall assessment, see how individual criteria contribute, and trace the underlying findings back to the supporting documents.

<figure style="margin: 1.5rem 0">
  <a href="/assets/case-studies/dealyzer/scorecard.png"><img src="/assets/case-studies/dealyzer/scorecard.png" width="1440" height="1000" style="width: 100%; height: auto" alt="Dealyzer scorecard showing an overall assessment and weighted diligence criteria."></a>
  <figcaption>The original Dealyzer scorecard, as shown in the product overview. Select the image to view it at full size.</figcaption>
</figure>

## Measuring model usage

I added instrumentation for token usage and cache behavior to see where model calls were spending their budget. I used it to identify oversized agent tool responses and reduce how much context those responses passed back to the model.
