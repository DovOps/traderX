***
# 🛠️ **Backpatch Alliance — Summary**


***
## **TL;DR — Short Version**

- **Goal**: Create a FINOS-governed, shared repository of trusted EOL patches.
- **Benefits**: Lower costs, trustworthy provenance, rapid patch availability.
- **Moderne**: Provides SLA-based patch creation + automated rollout tooling.
- **Status**: Strong interest; board-level discussions in motion.
- **Next Step**: Secure three+ FINOS member firms to formalize the alliance.
***


## **What It Is**

The **Backpatch Alliance** is a proposed **FINOS‑hosted open‑source initiative** aimed at creating a **trusted, community‑governed repository of backpatched OSS components**, especially for **EOL (end‑of‑life)** libraries and frameworks.  
Participating FINOS members would both **consume** and **contribute** patches through a shared artifact repository (e.g., a Maven repository), under consistent governance.

## **Why It Matters**

Many organizations face situations where they **must apply security or stability patches without performing a full upgrade**. Reasons include:

*   Architectural or contractual constraints
*   Risk limitations
*   Operational realities
*   Multi‑year upgrade cycles

At the same time, the industry is facing increasing pressure from **commercial EOL patch vendors** that charge significant premiums.  
The Backpatch Alliance aims to **mutualize the cost**, eliminate duplication, and provide **transparent, high‑trust patch provenance**.

## **Why FINOS?**

FINOS is uniquely positioned to host this effort because:

*   Members already have **approved governance structures** in place for code and artifact contributions.
*   It has a strong track record of **industry‑wide, vendor‑neutral collaboration**.
*   It provides a ready community of regulated institutions with shared needs around OSS supply‑chain resilience.

## **Moderne’s Role**

Moderne is prepared to contribute several key capabilities:

### **1. SLA‑Backed Patch Production**

Moderne is willing to provide an **SLA‑based service** to generate high‑quality patches for specific OSS components, ensuring **timely availability**.

### **2. Automated Patch Distribution**

Moderne’s OpenRewrite‑based recipes (e.g., “Upgrade Dependency Version”) can automatically:

*   Update build files to consume newly patched artifacts
*   Detect and rewrite dependency graphs at scale
*   Reduce friction and risk in rolling out patches across large codebases

### **3. Branding, Copy, and Demonstration Assets**

Moderne has already produced initial branding, messaging, and even a **demo website** to help the initiative gain early traction.

## **Strategic Goals of the Alliance**

### **✔ Trusted Patch Provenance**

A shared, open, cryptographically verifiable ecosystem of patches that institutions can rely on without opaque vendor dependencies.

### **✔ Shared Cost Model**

Instead of each firm paying separately for EOL support, members share the burden of creating and maintaining patches.

### **✔ Community Contribution & Consumption**

Members can both **contribute patches** and **use patches**, increasing both diversity and availability of fixes.

### **✔ Timeliness of Security Response**

Via Moderne’s SLA‑supported patch creation and a shared distribution pipeline.

### **✔ Governance‑Driven Neutrality**

FINOS ensures decision‑making isn’t driven by a single vendor and that processes remain open and transparent.

## **Status & Momentum**

### **Board‑Level Attention**

Early discussions received strong encouragement from FINOS leadership and board‑level participants across multiple firms.

### **Cross‑Institutional Interest**

Interest has been noted or discussed with:

*   Citi
*   Fidelity
*   Capital One
*   BNY
*   JPMorgan
*   Other large financial institutions considering participation

### **Proposal Materials**

A full slide deck (“Backpatch‑alliance.pdf”) was produced for the January 21, 2026 FINOS Governing Board Meeting.

### **Working Group Formation Path**

The initial objective is to identify at least **three FINOS members** formally interested, enabling FINOS to establish a working group and formalize the project.

## **Key Considerations Raised**

### **Vendor Dynamics**

Discussion included whether additional commercial vendors (e.g., Herodevs, JFrog) joining the effort could create competitive dynamics similar to past FINOS projects.  
This requires thoughtful design of contribution and governance boundaries.

### **OSS Maintainer Support**

A significant opportunity exists for this Alliance to create predictable funding and recognition pathways for maintainers of widely‑used but aging OSS components.
