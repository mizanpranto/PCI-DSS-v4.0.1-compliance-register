// Sample PCI DSS v4.0.1 gap-assessment dataset (fictional demo data)
const SAMPLE_ASSESSMENT = [
  {
    "ref": "1.1",
    "category": "Core Requirements",
    "section": "1 - Install and Maintain Network Security Controls",
    "requirement": "Has the organisation implemented and evidenced the control objective: processes and mechanisms for installing and maintaining network security controls are defined and understood?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "1.2",
    "category": "Core Requirements",
    "section": "1 - Install and Maintain Network Security Controls",
    "requirement": "Has the organisation implemented and evidenced the control objective: network security controls (NSCs) are configured and maintained?",
    "compliance": "Not Compliant",
    "owner": "T. Ahmed",
    "priority": "Medium",
    "notes": "Gap identified during review \u2014 network security controls (NSCs) are configured and maintained has not been implemented. Remediation plan required."
  },
  {
    "ref": "1.3",
    "category": "Core Requirements",
    "section": "1 - Install and Maintain Network Security Controls",
    "requirement": "Has the organisation implemented and evidenced the control objective: network access to and from the cardholder data environment is restricted?",
    "compliance": "Partially Compliant",
    "owner": "Security Engineering",
    "priority": "Low",
    "notes": "Network access to and from the cardholder data environment is restricted is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "1.4",
    "category": "Core Requirements",
    "section": "1 - Install and Maintain Network Security Controls",
    "requirement": "Has the organisation implemented and evidenced the control objective: network connections between trusted and untrusted networks are controlled?",
    "compliance": "Fully Compliant",
    "owner": "Security Engineering",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "1.5",
    "category": "Core Requirements",
    "section": "1 - Install and Maintain Network Security Controls",
    "requirement": "Has the organisation implemented and evidenced the control objective: risks to the CDE from computing devices that can connect to both untrusted networks and the CDE are mitigated?",
    "compliance": "Fully Compliant",
    "owner": "Security Engineering",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "2.1",
    "category": "Core Requirements",
    "section": "2 - Apply Secure Configurations to All System Components",
    "requirement": "Has the organisation implemented and evidenced the control objective: processes and mechanisms for applying secure configurations to all system components are defined and understood?",
    "compliance": "Partially Compliant",
    "owner": "QSA Liaison",
    "priority": "Medium",
    "notes": "Processes and mechanisms for applying secure configurations to all system components are defined and understood is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "2.2",
    "category": "Core Requirements",
    "section": "2 - Apply Secure Configurations to All System Components",
    "requirement": "Has the organisation implemented and evidenced the control objective: system components are configured and managed securely?",
    "compliance": "Fully Compliant",
    "owner": "QSA Liaison",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "2.3",
    "category": "Core Requirements",
    "section": "2 - Apply Secure Configurations to All System Components",
    "requirement": "Has the organisation implemented and evidenced the control objective: wireless environments are configured and managed securely?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "3.1",
    "category": "Core Requirements",
    "section": "3 - Protect Stored Account Data",
    "requirement": "Has the organisation implemented and evidenced the control objective: processes and mechanisms for protecting stored account data are defined and understood?",
    "compliance": "Not Compliant",
    "owner": "T. Ahmed",
    "priority": "High",
    "notes": "Gap identified during review \u2014 processes and mechanisms for protecting stored account data are defined and understood has not been implemented. Remediation plan required."
  },
  {
    "ref": "3.2",
    "category": "Core Requirements",
    "section": "3 - Protect Stored Account Data",
    "requirement": "Has the organisation implemented and evidenced the control objective: storage of account data is kept to a minimum?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "3.3",
    "category": "Core Requirements",
    "section": "3 - Protect Stored Account Data",
    "requirement": "Has the organisation implemented and evidenced the control objective: sensitive authentication data (SAD) is not stored after authorization?",
    "compliance": "Not Compliant",
    "owner": "R. Hasan",
    "priority": "Medium",
    "notes": "Gap identified during review \u2014 sensitive authentication data (SAD) is not stored after authorization has not been implemented. Remediation plan required."
  },
  {
    "ref": "3.4",
    "category": "Core Requirements",
    "section": "3 - Protect Stored Account Data",
    "requirement": "Has the organisation implemented and evidenced the control objective: access to displays of full PAN and ability to copy PAN is restricted?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "3.5",
    "category": "Core Requirements",
    "section": "3 - Protect Stored Account Data",
    "requirement": "Has the organisation implemented and evidenced the control objective: primary account number (PAN) is secured wherever it is stored?",
    "compliance": "Partially Compliant",
    "owner": "A. Rahman",
    "priority": "High",
    "notes": "Primary account number (PAN) is secured wherever it is stored is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "3.6",
    "category": "Core Requirements",
    "section": "3 - Protect Stored Account Data",
    "requirement": "Has the organisation implemented and evidenced the control objective: cryptographic keys used to protect stored account data are secured?",
    "compliance": "Not Compliant",
    "owner": "N. Islam",
    "priority": "Medium",
    "notes": "Gap identified during review \u2014 cryptographic keys used to protect stored account data are secured has not been implemented. Remediation plan required."
  },
  {
    "ref": "3.7",
    "category": "Core Requirements",
    "section": "3 - Protect Stored Account Data",
    "requirement": "Has the organisation implemented and evidenced the control objective: key-management processes and procedures covering the full cryptographic key lifecycle are defined and implemented?",
    "compliance": "Partially Compliant",
    "owner": "Security Engineering",
    "priority": "Low",
    "notes": "Key-management processes and procedures covering the full cryptographic key lifecycle are defined and implemented is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "4.1",
    "category": "Core Requirements",
    "section": "4 - Protect Cardholder Data with Strong Cryptography During Transmission",
    "requirement": "Has the organisation implemented and evidenced the control objective: processes and mechanisms for protecting cardholder data with strong cryptography during transmission over open, public networks are defined and documented?",
    "compliance": "Not Compliant",
    "owner": "M. Karim",
    "priority": "Low",
    "notes": "Gap identified during review \u2014 processes and mechanisms for protecting cardholder data with strong cryptography during transmission over open, public networks are defined and documented has not been implemented. Remediation plan required."
  },
  {
    "ref": "4.2",
    "category": "Core Requirements",
    "section": "4 - Protect Cardholder Data with Strong Cryptography During Transmission",
    "requirement": "Has the organisation implemented and evidenced the control objective: PAN is protected with strong cryptography during transmission?",
    "compliance": "Partially Compliant",
    "owner": "T. Ahmed",
    "priority": "Low",
    "notes": "PAN is protected with strong cryptography during transmission is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "5.1",
    "category": "Core Requirements",
    "section": "5 - Protect All Systems and Networks from Malicious Software",
    "requirement": "Has the organisation implemented and evidenced the control objective: processes and mechanisms for protecting all systems and networks from malicious software are defined and understood?",
    "compliance": "Not Compliant",
    "owner": "S. Chowdhury",
    "priority": "High",
    "notes": "Gap identified during review \u2014 processes and mechanisms for protecting all systems and networks from malicious software are defined and understood has not been implemented. Remediation plan required."
  },
  {
    "ref": "5.2",
    "category": "Core Requirements",
    "section": "5 - Protect All Systems and Networks from Malicious Software",
    "requirement": "Has the organisation implemented and evidenced the control objective: malicious software (malware) is prevented, or detected and addressed?",
    "compliance": "Partially Compliant",
    "owner": "T. Ahmed",
    "priority": "High",
    "notes": "Malicious software (malware) is prevented, or detected and addressed is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "5.3",
    "category": "Core Requirements",
    "section": "5 - Protect All Systems and Networks from Malicious Software",
    "requirement": "Has the organisation implemented and evidenced the control objective: anti-malware mechanisms and processes are active, maintained, and monitored?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "5.4",
    "category": "Core Requirements",
    "section": "5 - Protect All Systems and Networks from Malicious Software",
    "requirement": "Has the organisation implemented and evidenced the control objective: anti-phishing mechanisms protect users against phishing attacks?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "6.1",
    "category": "Core Requirements",
    "section": "6 - Develop and Maintain Secure Systems and Software",
    "requirement": "Has the organisation implemented and evidenced the control objective: processes and mechanisms for developing and maintaining secure systems and software are defined and understood?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "6.2",
    "category": "Core Requirements",
    "section": "6 - Develop and Maintain Secure Systems and Software",
    "requirement": "Has the organisation implemented and evidenced the control objective: bespoke and custom software are developed securely?",
    "compliance": "Partially Compliant",
    "owner": "S. Chowdhury",
    "priority": "Low",
    "notes": "Bespoke and custom software are developed securely is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "6.3",
    "category": "Core Requirements",
    "section": "6 - Develop and Maintain Secure Systems and Software",
    "requirement": "Has the organisation implemented and evidenced the control objective: security vulnerabilities are identified and addressed?",
    "compliance": "Partially Compliant",
    "owner": "R. Hasan",
    "priority": "Medium",
    "notes": "Security vulnerabilities are identified and addressed is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "6.4",
    "category": "Core Requirements",
    "section": "6 - Develop and Maintain Secure Systems and Software",
    "requirement": "Has the organisation implemented and evidenced the control objective: public-facing web applications are protected against attacks?",
    "compliance": "Partially Compliant",
    "owner": "M. Karim",
    "priority": "High",
    "notes": "Public-facing web applications are protected against attacks is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "6.5",
    "category": "Core Requirements",
    "section": "6 - Develop and Maintain Secure Systems and Software",
    "requirement": "Has the organisation implemented and evidenced the control objective: changes to all system components are managed securely?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "7.1",
    "category": "Core Requirements",
    "section": "7 - Restrict Access by Business Need to Know",
    "requirement": "Has the organisation implemented and evidenced the control objective: processes and mechanisms for restricting access to system components and cardholder data by business need to know are defined and understood?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "7.2",
    "category": "Core Requirements",
    "section": "7 - Restrict Access by Business Need to Know",
    "requirement": "Has the organisation implemented and evidenced the control objective: access to system components and data is appropriately defined and assigned?",
    "compliance": "Partially Compliant",
    "owner": "R. Hasan",
    "priority": "High",
    "notes": "Access to system components and data is appropriately defined and assigned is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "7.3",
    "category": "Core Requirements",
    "section": "7 - Restrict Access by Business Need to Know",
    "requirement": "Has the organisation implemented and evidenced the control objective: access to system components and data is managed via an access control system?",
    "compliance": "Fully Compliant",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "8.1",
    "category": "Core Requirements",
    "section": "8 - Identify Users and Authenticate Access",
    "requirement": "Has the organisation implemented and evidenced the control objective: processes and mechanisms for identifying users and authenticating access to system components are defined and understood?",
    "compliance": "Partially Compliant",
    "owner": "Security Engineering",
    "priority": "Medium",
    "notes": "Processes and mechanisms for identifying users and authenticating access to system components are defined and understood is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "8.2",
    "category": "Core Requirements",
    "section": "8 - Identify Users and Authenticate Access",
    "requirement": "Has the organisation implemented and evidenced the control objective: user identification and related accounts for users and administrators are strictly managed throughout an account's lifecycle?",
    "compliance": "Partially Compliant",
    "owner": "Security Engineering",
    "priority": "Low",
    "notes": "User identification and related accounts for users and administrators are strictly managed throughout an account's lifecycle is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "8.3",
    "category": "Core Requirements",
    "section": "8 - Identify Users and Authenticate Access",
    "requirement": "Has the organisation implemented and evidenced the control objective: strong authentication for users and administrators is established and managed?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "8.4",
    "category": "Core Requirements",
    "section": "8 - Identify Users and Authenticate Access",
    "requirement": "Has the organisation implemented and evidenced the control objective: multi-factor authentication (MFA) is implemented to secure access into the CDE?",
    "compliance": "Partially Compliant",
    "owner": "Security Engineering",
    "priority": "Medium",
    "notes": "Multi-factor authentication (MFA) is implemented to secure access into the CDE is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "8.5",
    "category": "Core Requirements",
    "section": "8 - Identify Users and Authenticate Access",
    "requirement": "Has the organisation implemented and evidenced the control objective: multi-factor authentication (MFA) systems are configured to prevent misuse?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "8.6",
    "category": "Core Requirements",
    "section": "8 - Identify Users and Authenticate Access",
    "requirement": "Has the organisation implemented and evidenced the control objective: use of application and system accounts and associated authentication factors is strictly managed?",
    "compliance": "Fully Compliant",
    "owner": "Security Engineering",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "9.1",
    "category": "Core Requirements",
    "section": "9 - Restrict Physical Access to Cardholder Data",
    "requirement": "Has the organisation implemented and evidenced the control objective: processes and mechanisms for restricting physical access to cardholder data are defined and understood?",
    "compliance": "Partially Compliant",
    "owner": "S. Chowdhury",
    "priority": "Medium",
    "notes": "Processes and mechanisms for restricting physical access to cardholder data are defined and understood is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "9.2",
    "category": "Core Requirements",
    "section": "9 - Restrict Physical Access to Cardholder Data",
    "requirement": "Has the organisation implemented and evidenced the control objective: physical access controls manage entry into facilities and systems containing cardholder data?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "9.3",
    "category": "Core Requirements",
    "section": "9 - Restrict Physical Access to Cardholder Data",
    "requirement": "Has the organisation implemented and evidenced the control objective: physical access for personnel and visitors is authorized and managed?",
    "compliance": "Not Compliant",
    "owner": "R. Hasan",
    "priority": "Low",
    "notes": "Gap identified during review \u2014 physical access for personnel and visitors is authorized and managed has not been implemented. Remediation plan required."
  },
  {
    "ref": "9.4",
    "category": "Core Requirements",
    "section": "9 - Restrict Physical Access to Cardholder Data",
    "requirement": "Has the organisation implemented and evidenced the control objective: media with cardholder data is securely stored, accessed, distributed, and destroyed?",
    "compliance": "Fully Compliant",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "9.5",
    "category": "Core Requirements",
    "section": "9 - Restrict Physical Access to Cardholder Data",
    "requirement": "Has the organisation implemented and evidenced the control objective: point-of-interaction (POI) devices are protected from tampering and unauthorized substitution?",
    "compliance": "Partially Compliant",
    "owner": "Security Engineering",
    "priority": "High",
    "notes": "Point-of-interaction (POI) devices are protected from tampering and unauthorized substitution is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "10.1",
    "category": "Core Requirements",
    "section": "10 - Log and Monitor All Access",
    "requirement": "Has the organisation implemented and evidenced the control objective: processes and mechanisms for logging and monitoring all access to system components and cardholder data are defined and understood?",
    "compliance": "Fully Compliant",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "10.2",
    "category": "Core Requirements",
    "section": "10 - Log and Monitor All Access",
    "requirement": "Has the organisation implemented and evidenced the control objective: audit logs are implemented to support the detection of anomalies and suspicious activity?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "10.3",
    "category": "Core Requirements",
    "section": "10 - Log and Monitor All Access",
    "requirement": "Has the organisation implemented and evidenced the control objective: audit logs are protected from destruction and unauthorized modification?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "10.4",
    "category": "Core Requirements",
    "section": "10 - Log and Monitor All Access",
    "requirement": "Has the organisation implemented and evidenced the control objective: audit logs are reviewed to identify anomalies or suspicious activity?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "10.5",
    "category": "Core Requirements",
    "section": "10 - Log and Monitor All Access",
    "requirement": "Has the organisation implemented and evidenced the control objective: audit log history is retained and available for analysis?",
    "compliance": "Not Applicable",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "10.6",
    "category": "Core Requirements",
    "section": "10 - Log and Monitor All Access",
    "requirement": "Has the organisation implemented and evidenced the control objective: time-synchronization mechanisms support consistent time settings across all systems?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "10.7",
    "category": "Core Requirements",
    "section": "10 - Log and Monitor All Access",
    "requirement": "Has the organisation implemented and evidenced the control objective: failures of critical security control systems are detected, reported, and responded to?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "11.1",
    "category": "Core Requirements",
    "section": "11 - Test Security of Systems and Networks Regularly",
    "requirement": "Has the organisation implemented and evidenced the control objective: processes and mechanisms for regularly testing security of systems and networks are defined and understood?",
    "compliance": "Partially Compliant",
    "owner": "Security Engineering",
    "priority": "Low",
    "notes": "Processes and mechanisms for regularly testing security of systems and networks are defined and understood is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "11.2",
    "category": "Core Requirements",
    "section": "11 - Test Security of Systems and Networks Regularly",
    "requirement": "Has the organisation implemented and evidenced the control objective: wireless access points are identified and monitored, and unauthorized wireless access points are addressed?",
    "compliance": "Fully Compliant",
    "owner": "QSA Liaison",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "11.3",
    "category": "Core Requirements",
    "section": "11 - Test Security of Systems and Networks Regularly",
    "requirement": "Has the organisation implemented and evidenced the control objective: external and internal vulnerabilities are regularly identified, prioritized, and addressed?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "11.4",
    "category": "Core Requirements",
    "section": "11 - Test Security of Systems and Networks Regularly",
    "requirement": "Has the organisation implemented and evidenced the control objective: external and internal penetration testing is regularly performed and exploitable findings are corrected?",
    "compliance": "Fully Compliant",
    "owner": "QSA Liaison",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "11.5",
    "category": "Core Requirements",
    "section": "11 - Test Security of Systems and Networks Regularly",
    "requirement": "Has the organisation implemented and evidenced the control objective: network intrusions and unexpected file changes are detected and responded to?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "11.6",
    "category": "Core Requirements",
    "section": "11 - Test Security of Systems and Networks Regularly",
    "requirement": "Has the organisation implemented and evidenced the control objective: unauthorized changes on payment pages are detected and responded to?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "12.1",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "requirement": "Has the organisation implemented and evidenced the control objective: a comprehensive information security policy that governs and provides direction for protection of the entity's information assets is known and current?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "12.2",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "requirement": "Has the organisation implemented and evidenced the control objective: acceptable use policies for end-user technologies are defined and implemented?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "12.3",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "requirement": "Has the organisation implemented and evidenced the control objective: risks to the cardholder data environment are formally identified, evaluated, and managed?",
    "compliance": "Not Compliant",
    "owner": "M. Karim",
    "priority": "Medium",
    "notes": "Gap identified during review \u2014 risks to the cardholder data environment are formally identified, evaluated, and managed has not been implemented. Remediation plan required."
  },
  {
    "ref": "12.4",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "requirement": "Has the organisation implemented and evidenced the control objective: PCI DSS compliance is managed?",
    "compliance": "Not Compliant",
    "owner": "Security Engineering",
    "priority": "Low",
    "notes": "Gap identified during review \u2014 PCI DSS compliance is managed has not been implemented. Remediation plan required."
  },
  {
    "ref": "12.5",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "requirement": "Has the organisation implemented and evidenced the control objective: PCI DSS scope is documented and validated?",
    "compliance": "Fully Compliant",
    "owner": "Security Engineering",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "12.6",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "requirement": "Has the organisation implemented and evidenced the control objective: security awareness education is an ongoing activity?",
    "compliance": "Not Compliant",
    "owner": "N. Islam",
    "priority": "Medium",
    "notes": "Gap identified during review \u2014 security awareness education is an ongoing activity has not been implemented. Remediation plan required."
  },
  {
    "ref": "12.7",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "requirement": "Has the organisation implemented and evidenced the control objective: personnel are screened to reduce risks from insider threats?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "12.8",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "requirement": "Has the organisation implemented and evidenced the control objective: risk to information assets associated with third-party service provider (TPSP) relationships is managed?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "12.9",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "requirement": "Has the organisation implemented and evidenced the control objective: third-party service providers (TPSPs) support their customers' PCI DSS compliance?",
    "compliance": "Partially Compliant",
    "owner": "S. Chowdhury",
    "priority": "Low",
    "notes": "Third-party service providers (TPSPs) support their customers' PCI DSS compliance is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "12.10",
    "category": "Core Requirements",
    "section": "12 - Support Information Security with Organizational Policies and Programs",
    "requirement": "Has the organisation implemented and evidenced the control objective: suspected and confirmed security incidents that could impact the CDE are responded to immediately?",
    "compliance": "Not Compliant",
    "owner": "S. Chowdhury",
    "priority": "Medium",
    "notes": "Gap identified during review \u2014 suspected and confirmed security incidents that could impact the CDE are responded to immediately has not been implemented. Remediation plan required."
  },
  {
    "ref": "A1.1.1",
    "category": "Appendix A1 Controls",
    "section": "A1.1 - Multi-tenant service providers protect and separate customer environments",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to logical separation of customer environments, including from the provider's own control backplane?",
    "compliance": "Partially Compliant",
    "owner": "N. Islam",
    "priority": "Low",
    "notes": "Logical separation of customer environments, including from the provider's own control backplane is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "A1.1.2",
    "category": "Appendix A1 Controls",
    "section": "A1.1 - Multi-tenant service providers protect and separate customer environments",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to controls preventing any breach of the logical separation between customer environments?",
    "compliance": "Fully Compliant",
    "owner": "QSA Liaison",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A1.1.3",
    "category": "Appendix A1 Controls",
    "section": "A1.1 - Multi-tenant service providers protect and separate customer environments",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to controls preventing customers from accessing the provider's own shared resources and environments?",
    "compliance": "Partially Compliant",
    "owner": "M. Karim",
    "priority": "Medium",
    "notes": "Controls preventing customers from accessing the provider's own shared resources and environments is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "A1.1.4",
    "category": "Appendix A1 Controls",
    "section": "A1.1 - Multi-tenant service providers protect and separate customer environments",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to six-monthly penetration testing to confirm effectiveness of logical separation controls?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A1.2.1",
    "category": "Appendix A1 Controls",
    "section": "A1.2 - Multi-tenant service providers facilitate logging and incident response for customer environments",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to audit log capability enabled for each customer environment, consistent with Requirement 10?",
    "compliance": "Not Compliant",
    "owner": "R. Hasan",
    "priority": "Medium",
    "notes": "Gap identified during review \u2014 audit log capability enabled for each customer environment, consistent with Requirement 10 has not been implemented. Remediation plan required."
  },
  {
    "ref": "A1.2.2",
    "category": "Appendix A1 Controls",
    "section": "A1.2 - Multi-tenant service providers facilitate logging and incident response for customer environments",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to processes for customers to identify and report suspected shared-resource issues affecting their environment?",
    "compliance": "Not Applicable",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A1.2.3",
    "category": "Appendix A1 Controls",
    "section": "A1.2 - Multi-tenant service providers facilitate logging and incident response for customer environments",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to processes for reporting and addressing suspected or confirmed security incidents and vulnerabilities?",
    "compliance": "Partially Compliant",
    "owner": "S. Chowdhury",
    "priority": "Medium",
    "notes": "Processes for reporting and addressing suspected or confirmed security incidents and vulnerabilities is partly in place but lacks consistent evidence or full documentation."
  }
];
