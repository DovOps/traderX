# FINOS Supply Chain Resiliency Initiative - Scope Document

## Executive Summary

The **Supply Chain Resiliency Initiative** addresses systemic risks arising from financial services organizations' reliance on open-source software (OSS). This initiative focuses on collaborative approaches to patching, maintainership, end-of-life (EOL) management, and support models for critical OSS dependencies across the financial services industry.

## Strategic Rationale

Financial institutions face increasing pressure to manage open-source supply chain risks while containing costs. Individual firms often:
- Pay separately for EOL support from commercial vendors
- Maintain costly internal forks of critical dependencies
- Lack visibility into project health and EOL states
- Face regulatory expectations around risk management without clear industry standards

By **mutualizing costs and risks** across FINOS member organizations, this initiative aims to create shared infrastructure, governance, and processes that benefit the entire financial services ecosystem.

---

## Scope Definition

### In Scope

1. **Open-Source Dependency Risk Assessment**
   - Developing capabilities to measure and compare risk across OSS dependencies
   - Creating frameworks for assessing project health and viability
   - Establishing explicit EOL detection models for open-source projects

2. **Collaborative Patch Management**
   - Security vulnerabilities requiring urgent patches
   - Critical defect patches for production dependencies
   - Backporting patches to EOL versions of critical libraries
   - Creating trusted, community-governed patch repositories

3. **Maintainership and Support Models**
   - Exploring foundation-based support alternatives to commercial vendors
   - Creating pathways for collective funding of critical OSS maintainers
   - Addressing maintainer liability and employer policy constraints

4. **Shared Infrastructure and Governance**
   - Establishing SLA-based response models for critical dependencies
   - Creating transparent governance for patch contribution and consumption
   - Building inventory overlap analysis across member firms (with antitrust safeguards)

### Out of Scope (Initial Phase)

- General procurement processes unrelated to OSS maintenance
- Non-critical or low-risk dependencies
- Development of new OSS projects (unless related to tooling for this initiative)
- License compliance (already addressed by existing FINOS activities)

---

## Work Streams

### Work Stream 0: Risk Measurement & Assessment

**Objective**: Create capabilities to assess and compare risk across open-source dependencies

**Key Activities**:
- Define explicit EOL indicators for open-source projects (e.g., time-since-last-release heuristics)
- Leverage existing OpenSSF health indicators and Linux Foundation LFX metrics
- Develop risk scoring models based on:
  - Maintainer activity and responsiveness
  - Release cadence and issue/PR patterns
  - Foundation backing and community size
  - Criticality to financial services operations

**Deliverables**:
- Risk assessment framework and tooling
- EOL detection methodology
- Baseline metrics for prioritization across work streams

---

### Work Stream 1: Use Case Definition

**Objective**: Define specific use cases the initiative addresses

**Priority Use Cases**:
1. **Urgent Security Vulnerabilities**
   - Time-critical patches for disclosed CVEs
   - Backporting security fixes to EOL versions still in production

2. **Critical Defect Management**
   - Long-running stability or operational issues
   - Performance regressions affecting production systems

3. **Loss of Maintainership**
   - Projects entering implicit EOL state
   - Critical dependencies with declining maintainer activity

4. **End-of-Life Support**
   - Continued maintenance of EOL versions under contractual or architectural constraints
   - Risk mitigation for multi-year upgrade cycles

**Deliverables**:
- Prioritized use case catalog
- Severity and SLA definitions per use case type
- Response models (reactive vs. proactive) per category

---

### Work Stream 2: Prioritized Inventory & Overlap Analysis

**Objective**: Identify systemically important OSS components shared across FINOS members

**Key Activities**:
- Member firms identify highest-risk or highest-cost dependencies
- Compare dependency lists to identify overlap (with antitrust safeguards)
- Prioritize shared dependencies based on:
  - Number of member firms affected
  - Criticality to production systems
  - Cost of current mitigation approaches (vendor support, internal forks)

**Deliverables**:
- Prioritized list of systemically important OSS components
- Cost-benefit analysis for collective vs. individual approaches
- Gap analysis of current support coverage

**Important Note**: Information sharing will be managed carefully to ensure antitrust compliance.

---

### Work Stream 3: Target-State SLA Model

**Objective**: Define service levels, response times, and governance for collective patch management

**Key Activities**:
- Establish SLA frameworks driven by:
  - Dependency criticality (production vs. non-production)
  - Issue severity (security, stability, performance)
  - Regulatory impact considerations
- Define measurable cost-effectiveness metrics
- Create transparent governance for:
  - Patch contribution and review processes
  - Quality assurance and testing requirements
  - Artifact distribution and cryptographic verification

**Deliverables**:
- SLA framework and governance charter
- Cost model and member contribution structure
- Quality assurance and security verification processes

---

## Strategic Opportunity: The Open Backpatch Alliance

### Overview

The **Open Backpatch Alliance** represents a concrete implementation opportunity within this initiative's scope. Proposed as a FINOS-hosted project, it addresses the specific use case of **trusted, community-governed backpatched OSS components**, particularly for EOL libraries and frameworks.

### Why This Fits the Initiative

The Backpatch Alliance directly addresses multiple work streams:
- **Work Stream 1**: Tackles the urgent security vulnerability and EOL support use cases
- **Work Stream 2**: Enables shared cost model for high-priority dependencies
- **Work Stream 3**: Provides concrete SLA-backed patch production and distribution

### Value Proposition

**For FINOS Members**:
- **Trusted Patch Provenance**: Cryptographically verifiable, open ecosystem eliminates opaque vendor dependencies
- **Shared Cost Model**: Mutualize the cost of EOL patch creation instead of separate vendor contracts
- **Community Contribution**: Both consume and contribute patches, increasing diversity and availability
- **Timeliness**: SLA-supported patch creation through Moderne partnership

**For the Industry**:
- Transparent, vendor-neutral governance through FINOS
- Alternative to expensive commercial EOL patch vendors
- Predictable funding and recognition pathways for OSS maintainers

### Moderne's Contribution

Moderne has expressed willingness to contribute:

1. **SLA-Backed Patch Production**: Generate high-quality patches for specific OSS components with timeliness guarantees
2. **Automated Distribution**: OpenRewrite-based recipes to automatically update build files and dependency graphs at scale
3. **Initial Assets**: Branding, messaging, and demonstration website to accelerate adoption

### Current Status

- Strong interest noted from: Citi, Fidelity, Capital One, BNY, JPMorgan, Morgan Stanley
- Board-level attention received at January 21, 2026 FINOS Governing Board Meeting
- Proposal deck ("Backpatch-alliance.pdf") produced
- Next step: Secure three+ FINOS member firms to formalize working group

### Integration with Initiative

The Backpatch Alliance can serve as the **pilot implementation** of this initiative's broader supply chain resiliency goals, providing:
- Concrete deliverables and measurable outcomes
- Proof of concept for the shared cost and governance model
- Infrastructure reusable for other work streams
- Early momentum and member engagement

---

## Success Criteria

### Short Term (Q1-Q2 2026)

- Formalize scope and secure board approval for strategic initiative
- Establish working group with 5+ FINOS member firms actively participating
- Complete risk assessment framework (Work Stream 0)
- Launch Backpatch Alliance pilot with 3+ members committed
- Identify top 10 systemically important dependencies across members

### Medium Term (H2 2026)

- Deliver first backpatched artifacts through Backpatch Alliance
- Establish SLA framework and governance charter
- Complete inventory overlap analysis across participating members
- Demonstrate measurable cost savings vs. commercial alternatives
- Achieve 50%+ reduction in patch delivery time for critical CVEs

### Long Term (2027+)

- Expand Backpatch Alliance to cover 20+ critical EOL dependencies
- Establish predictable funding model for critical OSS maintainers
- Influence regulatory expectations and industry standards for OSS risk management
- Create replicable model for other industry consortia

---

## Governance & Operating Model

### Leadership Structure

- **Working Group Chair**: TBD (elected from participating members)
- **FINOS Liaison**: Rob Moffat (Chief Architect) / Gabriele Columbro (Executive Director)
- **Technical Steering Committee**: Representatives from participating firms

### Membership & Participation

**Participating Members**:
- FINOS member firms contributing resources, expertise, or funding
- Vote on prioritization, governance, and strategic decisions

**Contributing Vendors** (if applicable):
- Vendors providing specialized services (e.g., Moderne for patch production)
- Contribution under FINOS governance to ensure vendor neutrality

**Open Participation**:
- All FINOS members can consume artifacts and participate in working group discussions
- Contribution and consumption models designed to encourage broad participation

### Decision-Making

- Consensus-driven where possible
- Voting structure for contentious decisions (aligned with FINOS governance)
- Transparent decision records and meeting minutes

---

## Key Considerations & Risks

### Antitrust Compliance

- Inventory sharing must be carefully managed with legal oversight
- Focus on technical standards and shared tooling, not competitive business practices
- Clear documentation of rationale and public benefit

### Vendor Dynamics

- Need to balance commercial vendor participation with community governance
- Similar to past FINOS projects (e.g., OpenSSF, LFX), thoughtful design of contribution boundaries required
- Risk of competitive dynamics between vendors (e.g., Herodevs, JFrog, Moderne)

### Maintainer Relations

- Opportunity to create predictable funding and recognition for OSS maintainers
- Must ensure maintainers are involved and benefit from the initiative
- Avoid creating parallel structures that undermine upstream projects

### Regulatory Expectations

- Increasingly, regulators expect firms to manage OSS supply chain risk
- This initiative can help establish industry best practices and standards
- Potential for regulatory impact if successful

---

## Next Steps

1. **Immediate (February 2026)**
   - Present scope to working group for refinement and approval
   - Identify 3+ member firms formally interested in Backpatch Alliance
   - Engage legal review for antitrust compliance framework

2. **Short Term (March 2026)**
   - Present finalized scope to FINOS Governing Board
   - Request board approval to proceed as strategic initiative
   - Form official working group and elect leadership

3. **Follow-Up Actions**
   - Schedule follow-ups with RBC (James) and NatWest (Bhupesh)
   - Invite Moderne to present Backpatch Alliance details to working group
   - Engage additional member firms showing interest (Citi, Fidelity, Capital One, etc.)

---

## Contact & More Information

**Working Group Meeting**: Tuesdays at 12:30pm Eastern

**FINOS Contacts**:
- Gabriele Columbro, Executive Director, FINOS
- Rob Moffat, Chief Architect, FINOS

**For membership or participation inquiries**: [FINOS Contact Information]

---

*Document Version 1.0 - February 2026*
