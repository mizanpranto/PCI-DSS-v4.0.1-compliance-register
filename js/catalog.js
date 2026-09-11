// Canonical PCI DSS v4.0.1 structure: Requirements 1-12 (control-objective level)
// and Appendix A1 (Additional Requirements for Multi-Tenant Service Providers).
// Titles are short reference labels; not a reproduction of standard text.
const CONTROL_CATALOG = [
  {
    "ref": "1.1",
    "category": "Core Requirements",
    "section": "1 - Install and Maintain Network Security Controls",
    "title": "Processes and mechanisms for installing and maintaining network security controls are defined and understood"
  },
  {
    "ref": "1.2",
    "category": "Core Requirements",
    "section": "1 - Install and Maintain Network Security Controls",
    "title": "Network security controls (NSCs) are configured and maintained"
  },
  {
    "ref": "1.3",
    "category": "Core Requirements",
    "section": "1 - Install and Maintain Network Security Controls",
    "title": "Network access to and from the cardholder data environment is restricted"
  },
  {
    "ref": "1.4",
    "category": "Core Requirements",
    "section": "1 - Install and Maintain Network Security Controls",
    "title": "Network connections between trusted and untrusted networks are controlled"
  },
  {
    "ref": "1.5",
    "category": "Core Requirements",
    "section": "1 - Install and Maintain Network Security Controls",
    "title": "Risks to the CDE from computing devices that can connect to both untrusted networks and the CDE are mitigated"
  },
  {
    "ref": "2.1",
    "category": "Core Requirements",
    "section": "2 - Apply Secure Configurations to All System Components",
    "title": "Processes and mechanisms for applying secure configurations to all system components are defined and understood"
  },
  {
    "ref": "2.2",
    "category": "Core Requirements",
    "section": "2 - Apply Secure Configurations to All System Components",
    "title": "System components are configured and managed securely"
  },
  {
    "ref": "2.3",
    "category": "Core Requirements",
    "section": "2 - Apply Secure Configurations to All System Components",
    "title": "Wireless environments are configured and managed securely"
  },
  {
    "ref": "3.1",
    "category": "Core Requirements",
    "section": "3 - Protect Stored Account Data",
    "title": "Processes and mechanisms for protecting stored account data are defined and understood"
  },
  {
    "ref": "3.2",
    "category": "Core Requirements",
    "section": "3 - Protect Stored Account Data",
    "title": "Storage of account data is kept to a minimum"
  },
  {
    "ref": "3.3",
    "category": "Core Requirements",
    "section": "3 - Protect Stored Account Data",
    "title": "Sensitive authentication data (SAD) is not stored after authorization"
  },
  {
    "ref": "3.4",
    "category": "Core Requirements",
    "section": "3 - Protect Stored Account Data",
    "title": "Access to displays of full PAN and ability to copy PAN is restricted"
  },
  {
    "ref": "3.5",
    "category": "Core Requirements",
    "section": "3 - Protect Stored Account Data",
    "title": "Primary account number (PAN) is secured wherever it is stored"
  },
  {
    "ref": "3.6",
    "category": "Core Requirements",
    "section": "3 - Protect Stored Account Data",
    "title": "Cryptographic keys used to protect stored account data are secured"
  },
  {
    "ref": "3.7",
    "category": "Core Requirements",
    "section": "3 - Protect Stored Account Data",
    "title": "Key-management processes and procedures covering the full cryptographic key lifecycle are defined and implemented"
  },
  {
    "ref": "4.1",
    "category": "Core Requirements",
    "section": "4 - Protect Cardholder Data with Strong Cryptography During Transmission",
    "title": "Processes and mechanisms for protecting cardholder data with strong cryptography during transmission over open, public networks are defined and documented"
  },
  {
    "ref": "4.2",
    "category": "Core Requirements",
    "section": "4 - Protect Cardholder Data with Strong Cryptography During Transmission",
    "title": "PAN is protected with strong cryptography during transmission"
  },
  {
    "ref": "5.1",
    "category": "Core Requirements",
    "section": "5 - Protect All Systems and Networks from Malicious Software",
    "title": "Processes and mechanisms for protecting all systems and networks from malicious software are defined and understood"
  },
  {
    "ref": "5.2",
    "category": "Core Requirements",
    "section": "5 - Protect All Systems and Networks from Malicious Software",
    "title": "Malicious software (malware) is prevented, or detected and addressed"
  },
  {
    "ref": "5.3",
    "category": "Core Requirements",
    "section": "5 - Protect All Systems and Networks from Malicious Software",
    "title": "Anti-malware mechanisms and processes are active, maintained, and monitored"
  },
  {
    "ref": "5.4",
    "category": "Core Requirements",
    "section": "5 - Protect All Systems and Networks from Malicious Software",
    "title": "Anti-phishing mechanisms protect users against phishing attacks"
  },
  {
    "ref": "6.1",
    "category": "Core Requirements",
    "section": "6 - Develop and Maintain Secure Systems and Software",
    "title": "Processes and mechanisms for developing and maintaining secure systems and software are defined and understood"
  },
  {
    "ref": "6.2",
    "category": "Core Requirements",
    "section": "6 - Develop and Maintain Secure Systems and Software",
    "title": "Bespoke and custom software are developed securely"
  },
  {
    "ref": "6.3",
    "category": "Core Requirements",
    "section": "6 - Develop and Maintain Secure Systems and Software",
    "title": "Security vulnerabilities are identified and addressed"
  },
  {
    "ref": "6.4",
    "category": "Core Requirements",
    "section": "6 - Develop and Maintain Secure Systems and Software",
    "title": "Public-facing web applications are protected against attacks"
  },
  {
    "ref": "6.5",
    "category": "Core Requirements",
    "section": "6 - Develop and Maintain Secure Systems and Software",
    "title": "Changes to all system components are managed securely"
  },
  {
    "ref": "7.1",
    "category": "Core Requirements",
    "section": "7 - Restrict Access by Business Need to Know",
    "title": "Processes and mechanisms for restricting access to system components and cardholder data by business need to know are defined and understood"
  },
  {
    "ref": "7.2",
    "category": "Core Requirements",
    "section": "7 - Restrict Access by Business Need to Know",
    "title": "Access to system components and data is appropriately defined and assigned"
  },
  {
    "ref": "7.3",
    "category": "Core Requirements",
    "section": "7 - Restrict Access by Business Need to Know",
    "title": "Access to system components and data is managed via an access control system"
  },
  {
    "ref": "8.1",
    "category": "Core Requirements",
    "section": "8 - Identify Users and Authenticate Access",
    "title": "Processes and mechanisms for identifying users and authenticating access to system components are defined and understood"
  },
  {
    "ref": "8.2",
    "category": "Core Requirements",
    "section": "8 - Identify Users and Authenticate Access",
    "title": "User identification and related accounts for users and administrators are strictly managed throughout an account's lifecycle"
  },
  {
    "ref": "8.3",
    "category": "Core Requirements",
    "section": "8 - Identify Users and Authenticate Access",
    "title": "Strong authentication for users and administrators is established and managed"
  },
  {
    "ref": "8.4",
    "category": "Core Requirements",
    "section": "8 - Identify Users and Authenticate Access",
    "title": "Multi-factor authentication (MFA) is implemented to secure access into the CDE"
  },
  {
    "ref": "8.5",
    "category": "Core Requirements",
    "section": "8 - Identify Users and Authenticate Access",
    "title": "Multi-factor authentication (MFA) systems are configured to prevent misuse"
  },
  {
    "ref": "8.6",
    "category": "Core Requirements",
    "section": "8 - Identify Users and Authenticate Access",
    "title": "Use of application and system accounts and associated authentication factors is strictly managed"
  },
  {
    "ref": "9.1",
    "category": "Core Requirements",
    "section": "9 - Restrict Physical Access to Cardholder Data",
    "title": "Processes and mechanisms for restricting physical access to cardholder data are defined and understood"
  },
  {
    "ref": "9.2",
    "category": "Core Requirements",
    "section": "9 - Restrict Physical Access to Cardholder Data",
    "title": "Physical access controls manage entry into facilities and systems containing cardholder data"
  },
  {
    "ref": "9.3",
    "category": "Core Requirements",
    "section": "9 - Restrict Physical Access to Cardholder Data",
    "title": "Physical access for personnel and visitors is authorized and managed"
  },
  {
    "ref": "9.4",
    "category": "Core Requirements",
    "section": "9 - Restrict Physical Access to Cardholder Data",
    "title": "Media with cardholder data is securely stored, accessed, distributed, and destroyed"
  },
  {
    "ref": "9.5",
    "category": "Core Requirements",
    "section": "9 - Restrict Physical Access to Cardholder Data",
    "title": "Point-of-interaction (POI) devices are protected from tampering and unauthorized substitution"
  },
  {
    "ref": "10.1",
    "category": "Core Requirements",
    "section": "10 - Log and Monitor All Access",
    "title": "Processes and mechanisms for logging and monitoring all access to system components and cardholder data are defined and understood"
  },
  {
    "ref": "10.2",
    "category": "Core Requirements",
    "section": "10 - Log and Monitor All Access",
    "title": "Audit logs are implemented to support the detection of anomalies and suspicious activity"
  },
  {
    "ref": "10.3",
    "category": "Core Requirements",
    "section": "10 - Log and Monitor All Access",
    "title": "Audit logs are protected from destruction and unauthorized modification"
  },
  {
    "ref": "10.4",
    "category": "Core Requirements",
    "section": "10 - Log and Monitor All Access",
    "title": "Audit logs are reviewed to identify anomalies or suspicious activity"
  },
  {
    "ref": "10.5",
    "category": "Core Requirements",
    "section": "10 - Log and Monitor All Access",
    "title": "Audit log history is retained and available for analysis"
  },
  {
    "ref": "10.6",
    "category": "Core Requirements",
    "section": "10 - Log and Monitor All Access",
    "title": "Time-synchronization mechanisms support consistent time settings across all systems"
  },
  {
    "ref": "10.7",
    "category": "Core Requirements",
    "section": "10 - Log and Monitor All Access",
    "title": "Failures of critical security control systems are detected, reported, and responded to"
  },
  {
    "ref": "11.1",
    "category": "Core Requirements",
    "section": "11 - Test Security of Systems and Networks Regularly",
    "title": "Processes and mechanisms for regularly testing security of systems and networks are defined and understood"
  },
  {
    "ref": "11.2",
    "category": "Core Requirements",
    "section": "11 - Test Security of Systems and Networks Regularly",
    "title": "Wireless access points are identified and monitored, and unauthorized wireless access points are addressed"
  },
  {
    "ref": "11.3",
    "category": "Core Requirements",
    "section": "11 - Test Security of Systems and Networks Regularly",
    "title": "External and internal vulnerabilities are regularly identified, prioritized, and addressed"
  },
  {
    "ref": "11.4",
    "category": "Core Requirements",
    "section": "11 - Test Security of Systems and Networks Regularly",
    "title": "External and internal penetration testing is regularly performed and exploitable findings are corrected"
  },
  {
    "ref": "11.5",
    "category": "Core Requirements",
    "section": "11 - Test Security of Systems and Networks Regularly",
    "title": "Network intrusions and unexpected file changes are detected and responded to"
  },
  {
    "ref": "11.6",
    "category": "Core Requirements",
    "section": "11 - Test Security of Systems and Networks Regularly",
    "title": "Unauthorized changes on payment pages are detected and responded to"
  },
  {
    "ref": "12.1",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "title": "A comprehensive information security policy that governs and provides direction for protection of the entity's information assets is known and current"
  },
  {
    "ref": "12.2",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "title": "Acceptable use policies for end-user technologies are defined and implemented"
  },
  {
    "ref": "12.3",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "title": "Risks to the cardholder data environment are formally identified, evaluated, and managed"
  },
  {
    "ref": "12.4",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "title": "PCI DSS compliance is managed"
  },
  {
    "ref": "12.5",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "title": "PCI DSS scope is documented and validated"
  },
  {
    "ref": "12.6",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "title": "Security awareness education is an ongoing activity"
  },
  {
    "ref": "12.7",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "title": "Personnel are screened to reduce risks from insider threats"
  },
  {
    "ref": "12.8",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "title": "Risk to information assets associated with third-party service provider (TPSP) relationships is managed"
  },
  {
    "ref": "12.9",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "title": "Third-party service providers (TPSPs) support their customers' PCI DSS compliance"
  },
  {
    "ref": "12.10",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "title": "Suspected and confirmed security incidents that could impact the CDE are responded to immediately"
  },
  {
    "ref": "A1.1.1",
    "category": "Appendix A1 Controls",
    "section": "A1.1 - Multi-tenant service providers protect and separate customer environments",
    "title": "Logical separation of customer environments, including from the provider's own control backplane"
  },
  {
    "ref": "A1.1.2",
    "category": "Appendix A1 Controls",
    "section": "A1.1 - Multi-tenant service providers protect and separate customer environments",
    "title": "Controls preventing any breach of the logical separation between customer environments"
  },
  {
    "ref": "A1.1.3",
    "category": "Appendix A1 Controls",
    "section": "A1.1 - Multi-tenant service providers protect and separate customer environments",
    "title": "Controls preventing customers from accessing the provider's own shared resources and environments"
  },
  {
    "ref": "A1.1.4",
    "category": "Appendix A1 Controls",
    "section": "A1.1 - Multi-tenant service providers protect and separate customer environments",
    "title": "Six-monthly penetration testing to confirm effectiveness of logical separation controls"
  },
  {
    "ref": "A1.2.1",
    "category": "Appendix A1 Controls",
    "section": "A1.2 - Multi-tenant service providers facilitate logging and incident response for customer environments",
    "title": "Audit log capability enabled for each customer environment, consistent with Requirement 10"
  },
  {
    "ref": "A1.2.2",
    "category": "Appendix A1 Controls",
    "section": "A1.2 - Multi-tenant service providers facilitate logging and incident response for customer environments",
    "title": "Processes for customers to identify and report suspected shared-resource issues affecting their environment"
  },
  {
    "ref": "A1.2.3",
    "category": "Appendix A1 Controls",
    "section": "A1.2 - Multi-tenant service providers facilitate logging and incident response for customer environments",
    "title": "Processes for reporting and addressing suspected or confirmed security incidents and vulnerabilities"
  }
];

// Maps each Requirement number (1-12) to its PCI DSS control objective ("Goal").
const REQUIREMENT_GOAL = {
  "1": "Build and Maintain a Secure Network and Systems",
  "2": "Build and Maintain a Secure Network and Systems",
  "3": "Protect Account Data",
  "4": "Protect Account Data",
  "5": "Maintain a Vulnerability Management Program",
  "6": "Maintain a Vulnerability Management Program",
  "7": "Implement Strong Access Control Measures",
  "8": "Implement Strong Access Control Measures",
  "9": "Implement Strong Access Control Measures",
  "10": "Regularly Monitor and Test Networks",
  "11": "Regularly Monitor and Test Networks",
  "12": "Maintain an Information Security Policy"
};
