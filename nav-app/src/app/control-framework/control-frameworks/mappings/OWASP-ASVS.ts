export let owaspAsvs = [
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.1.1",
    "description": "Verify the use of a secure software development lifecycle that addresses security in all stages of development. ([C1](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": null,
      "NIST": null,
      "NIST SP 800-53 Rev. 4": "SA-3"
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.1.2",
    "description": "Verify the use of threat modeling for every design change or sprint planning to identify threats, plan for countermeasures, facilitate appropriate risk responses, and guide security testing.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 1053,
      "NIST": null,
      "NIST SP 800-53 Rev. 4": "SA-17"
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.1.3",
    "description": "Verify that all user stories and features contain functional security constraints, such as \"As a user, I should be able to view and edit my profile. I should not be able to view or edit anyone else's profile\"",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 1110,
      "NIST": null,
      "NIST SP 800-53 Rev. 4": "SA-17"
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.1.4",
    "description": "Verify documentation and justification of all the application's trust boundaries, components, and significant data flows.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 1059,
      "NIST": null,
      "NIST SP 800-53 Rev. 4": "SA-17"
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.1.5",
    "description": "Verify definition and security analysis of the application's high-level architecture and all connected remote services. ([C1](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 1059,
      "NIST": null,
      "NIST SP 800-53 Rev. 4": "SA-17"
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.1.6",
    "description": "Verify implementation of centralized, simple (economy of design), vetted, secure, and reusable security controls to avoid duplicate, missing, ineffective, or insecure controls. ([C10](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 637,
      "NIST": null,
      "NIST SP 800-53 Rev. 4": "SA-17"
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.1.7",
    "description": "Verify availability of a secure coding checklist, security requirements, guideline, or policy to all developers and testers.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 637,
      "NIST": null,
      "NIST SP 800-53 Rev. 4": "SA-17"
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.10.1",
    "description": "Verify that a source code control system is in use, with procedures to ensure that check-ins are accompanied by issues or change tickets. The source code control system should have access control and identifiable users to allow traceability of any changes.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 284,
      "NIST": null,
      "NIST SP 800-53 Rev. 4": "SA-17"
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.11.1",
    "description": "Verify the definition and documentation of all application components in terms of the business or security functions they provide.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 1059,
      "NIST": null,
      "NIST SP 800-53 Rev. 4": "SA-17"
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.11.2",
    "description": "Verify that all high-value business logic flows, including authentication, session management and access control, do not share unsynchronized state.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 362,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.11.3",
    "description": "Verify that all high-value business logic flows, including authentication, session management and access control are thread safe and resistant to time-of-check and time-of-use race conditions.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 367,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.12.1",
    "description": "Verify that user-uploaded files are stored outside of the web root.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 552,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.12.2",
    "description": "Verify that user-uploaded files - if required to be displayed or downloaded from the application - are served by either octet stream downloads, or from an unrelated domain, such as a cloud file storage bucket. Implement a suitable content security policy to reduce the risk from XSS vectors or other attacks from the uploaded file.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 646,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.14.1",
    "description": "Verify the segregation of components of differing trust levels through well-defined security controls, firewall rules, API gateways, reverse proxies, cloud-based security groups, or similar mechanisms.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 923,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.14.2",
    "description": "Verify that if deploying binaries to untrusted devices makes use of binary signatures, trusted connections, and verified endpoints.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 494,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.14.3",
    "description": "Verify that the build pipeline warns of out-of-date or insecure components and takes appropriate actions.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 1104,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.14.4",
    "description": "Verify that the build pipeline contains a build step to automatically build and verify the secure deployment of the application, particularly if the application infrastructure is software defined, such as cloud environment build scripts.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": null,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.14.5",
    "description": "Verify that application deployments adequately sandbox, containerize and/or isolate at the network level to delay and deter attackers from attacking other applications, especially when they are performing sensitive or dangerous actions such as deserialization. ([C5](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 265,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.14.6",
    "description": "Verify the application does not use unsupported, insecure, or deprecated client-side technologies such as NSAPI plugins, Flash, Shockwave, ActiveX, Silverlight, NACL, or client-side Java applets.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 477,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.2.1",
    "description": "Verify the use of unique or special low-privilege operating system accounts for all application components, services, and servers. ([C3](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 250,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.2.2",
    "description": "Verify that communications between application components, including APIs, middleware and data layers, are authenticated. Components should have the least necessary privileges needed. ([C3](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 306,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.2.3",
    "description": "Verify that the application uses a single vetted authentication mechanism that is known to be secure, can be extended to include strong authentication, and has sufficient logging and monitoring to detect account abuse or breaches.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 306,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.2.4",
    "description": "Verify that all authentication pathways and identity management APIs implement consistent authentication security control strength, such that there are no weaker alternatives per the risk of the application.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 306,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.4.1",
    "description": "Verify that trusted enforcement points such as at access control gateways, servers, and serverless functions enforce access controls. Never enforce access controls on the client.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 602,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.4.2",
    "description": "Verify that the chosen access control solution is flexible enough to meet the application's needs.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 284,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.4.3",
    "description": "Verify enforcement of the principle of least privilege in functions, data files, URLs, controllers, services, and other resources. This implies protection against spoofing and elevation of privilege.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 272,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.4.4",
    "description": "Verify the application uses a single and well-vetted access control mechanism for accessing protected data and resources. All requests must pass through this single mechanism to avoid copy and paste or insecure alternative paths. ([C7](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 284,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.4.5",
    "description": "Verify that attribute or feature-based access control is used whereby the code checks the user's authorization for a feature/data item rather than just their role. Permissions should still be allocated using roles. ([C7](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 275,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.5.1",
    "description": "Verify that input and output requirements clearly define how to handle and process data based on type, content, and applicable laws, regulations, and other policy compliance.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 1029,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.5.2",
    "description": "Verify that serialization is not used when communicating with untrusted clients. If this is not possible, ensure that adequate integrity controls (and possibly encryption if sensitive data is sent) are enforced to prevent deserialization attacks including object injection.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 502,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.5.3",
    "description": "Verify that input validation is enforced on a trusted service layer. ([C5](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 602,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.5.4",
    "description": "Verify that output encoding occurs close to or by the interpreter for which it is intended. ([C4](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 116,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.6.1",
    "description": "Verify that there is an explicit policy for management of cryptographic keys and that a cryptographic key lifecycle follows a key management standard such as NIST SP 800-57.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 320,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.6.2",
    "description": "Verify that consumers of cryptographic services protect key material and other secrets by using key vaults or API based alternatives.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 320,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.6.3",
    "description": "Verify that all keys and passwords are replaceable and are part of a well-defined process to re-encrypt sensitive data.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 320,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.6.4",
    "description": "Verify that symmetric keys, passwords, or API secrets generated by or shared with clients are used only in protecting low risk secrets, such as encrypting local storage, or temporary ephemeral uses such as parameter obfuscation. Sharing secrets with clients is clear-text equivalent and architecturally should be treated as such.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 320,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.7.1",
    "description": "Verify that a common logging format and approach is used across the system.  ([C9](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 1009,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.7.2",
    "description": "Verify that logs are securely transmitted to a preferably remote system for analysis, detection, alerting, and escalation. ([C9](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": null,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.8.1",
    "description": "Verify that all sensitive data is identified and classified into protection levels.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": null,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.8.2",
    "description": "Verify that all protection levels have an associated set of protection requirements, such as encryption requirements, integrity requirements, retention, privacy and other confidentiality requirements, and that these are applied in the architecture.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": null,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.9.1",
    "description": "Verify the application encrypts communications between components, particularly when these components are in different containers, systems, sites, or cloud providers. ([C3](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 319,
      "NIST": null
    }
  },
  {
    "section": "V1",
    "name": "Architecture",
    "itemId": "1.9.2",
    "description": "Verify that application components verify the authenticity of each side in a communication link to prevent person-in-the-middle attacks. For example, application components should validate TLS certificates and chains.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 295,
      "NIST": null
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.1.1",
    "description": "Verify that user set passwords are at least 12 characters in length. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 521,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.1.10",
    "description": "Verify that there are no periodic credential rotation or password history requirements.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 263,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.1.11",
    "description": "Verify that \"paste\" functionality, browser password helpers, and external password managers are permitted.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 521,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.1.12",
    "description": "Verify that the user can choose to either temporarily view the entire masked password, or temporarily view the last typed character of the password on platforms that do not have this as native functionality.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 521,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.1.2",
    "description": "Verify that passwords 64 characters or longer are permitted. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 521,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.1.3",
    "description": "Verify that passwords can contain spaces and truncation is not performed. Consecutive multiple spaces MAY optionally be coalesced. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 521,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.1.4",
    "description": "Verify that Unicode characters are permitted in passwords. A single Unicode code point is considered a character, so 12 emoji or 64 kanji characters should be valid and permitted.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 521,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.1.5",
    "description": "Verify users can change their password.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 620,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.1.6",
    "description": "Verify that password change functionality requires the user's current and new password.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 620,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.1.7",
    "description": "Verify that passwords submitted during account registration, login, and password change are checked against a set of breached passwords either locally (such as the top 1,000 or 10,000 most common passwords which match the system's password policy) or using an external API. If using an API a zero knowledge proof or other mechanism should be used to ensure that the plain text password is not sent or used in verifying the breach status of the password. If the password is breached, the application must require the user to set a new non-breached password. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 521,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.1.8",
    "description": "Verify that a password strength meter is provided to help users set a stronger password.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 521,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.1.9",
    "description": "Verify that there are no password composition rules limiting the type of characters permitted. There should be no requirement for upper or lower case or numbers or special characters. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 521,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.10.1",
    "description": "Verify that integration secrets do not rely on unchanging passwords, such as API keys or shared privileged accounts.",
    "l1": false,
    "l2": false,
    "l3": false,
    "mappings": {
      "CWE": 287,
      "NIST": [
        "5.1.1.1"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.10.2",
    "description": "Verify that if passwords are required, the credentials are not a default account.",
    "l1": false,
    "l2": false,
    "l3": false,
    "mappings": {
      "CWE": 255,
      "NIST": [
        "5.1.1.1"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.10.3",
    "description": "Verify that passwords are stored with sufficient protection to prevent offline recovery attacks, including local system access.",
    "l1": false,
    "l2": false,
    "l3": false,
    "mappings": {
      "CWE": 522,
      "NIST": [
        "5.1.1.1"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.10.4",
    "description": "Verify passwords, integrations with databases and third-party systems, seeds and internal secrets, and API keys are managed securely and not included in the source code or stored within source code repositories. Such storage SHOULD resist offline attacks. The use of a secure software key store (L1), hardware trusted platform module (TPM), or a hardware security module (L3) is recommended for password storage.",
    "l1": false,
    "l2": false,
    "l3": false,
    "mappings": {
      "CWE": 798,
      "NIST": null
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.2.1",
    "description": "Verify that anti-automation controls are effective at mitigating breached credential testing, brute force, and account lockout attacks. Such controls include blocking the most common breached passwords, soft lockouts, rate limiting, CAPTCHA, ever increasing delays between attempts, IP address restrictions, or risk-based restrictions such as location, first login on a device, recent attempts to unlock the account, or similar. Verify that no more than 100 failed attempts per hour is possible on a single account.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 307,
      "NIST": [
        "5.2.2",
        "5.1.1.2",
        "5.1.4.2",
        "5.1.5.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.2.2",
    "description": "Verify that the use of weak authenticators (such as SMS and email) is limited to secondary verification and transaction approval and not as a replacement for more secure authentication methods. Verify that stronger methods are offered before weak methods, users are aware of the risks, or that proper measures are in place to limit the risks of account compromise.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 304,
      "NIST": [
        "5.2.10"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.2.3",
    "description": "Verify that secure notifications are sent to users after updates to authentication details, such as credential resets, email or address changes, logging in from unknown or risky locations. The use of push notifications - rather than SMS or email - is preferred, but in the absence of push notifications, SMS or email is acceptable as long as no sensitive information is disclosed in the notification.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 620,
      "NIST": null
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.2.4",
    "description": "Verify impersonation resistance against phishing, such as the use of multi-factor authentication, cryptographic devices with intent (such as connected keys with a push to authenticate), or at higher AAL levels, client-side certificates.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 308,
      "NIST": [
        "5.2.5"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.2.5",
    "description": "Verify that where a credential service provider (CSP) and the application verifying authentication are separated, mutually authenticated TLS is in place between the two endpoints.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 319,
      "NIST": [
        "5.2.6"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.2.6",
    "description": "Verify replay resistance through the mandated use of OTP devices, cryptographic authenticators, or lookup codes.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 308,
      "NIST": [
        "5.2.8"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.2.7",
    "description": "Verify intent to authenticate by requiring the entry of an OTP token or user-initiated action such as a button press on a FIDO hardware key.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 308,
      "NIST": [
        "5.2.9"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.3.1",
    "description": "Verify system generated initial passwords or activation codes SHOULD be securely randomly generated, SHOULD be at least 6 characters long, and MAY contain letters and numbers, and expire after a short period of time. These initial secrets must not be permitted to become the long term password.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 330,
      "NIST": [
        "5.1.1.2",
        "A.3"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.3.2",
    "description": "Verify that enrollment and use of subscriber-provided authentication devices are supported, such as a U2F or FIDO tokens.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 308,
      "NIST": [
        "6.1.3"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.3.3",
    "description": "Verify that renewal instructions are sent with sufficient time to renew time bound authenticators.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 287,
      "NIST": [
        "6.1.4"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.4.1",
    "description": "Verify that passwords are stored in a form that is resistant to offline attacks. Passwords SHALL be salted and hashed using an approved one-way key derivation or password hashing function. Key derivation and password hashing functions take a password, a salt, and a cost factor as inputs when generating a password hash. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 916,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.4.2",
    "description": "Verify that the salt is at least 32 bits in length and be chosen arbitrarily to minimize salt value collisions among stored hashes. For each credential, a unique salt value and the resulting hash SHALL be stored. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 916,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.4.3",
    "description": "Verify that if PBKDF2 is used, the iteration count SHOULD be as large as verification server performance will allow, typically at least 100,000 iterations. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 916,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.4.4",
    "description": "Verify that if bcrypt is used, the work factor SHOULD be as large as verification server performance will allow, typically at least 13. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 916,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.4.5",
    "description": "Verify that an additional iteration of a key derivation function is performed, using a salt value that is secret and known only to the verifier. Generate the salt value using an approved random bit generator [SP 800-90Ar1] and provide at least the minimum security strength specified in the latest revision of SP 800-131A. The secret salt value SHALL be stored separately from the hashed passwords (e.g., in a specialized device like a hardware security module).",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 916,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.5.1",
    "description": "Verify that a system generated initial activation or recovery secret is not sent in clear text to the user. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 640,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.5.2",
    "description": "Verify password hints or knowledge-based authentication (so-called \"secret questions\") are not present.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 640,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.5.3",
    "description": "Verify password credential recovery does not reveal the current password in any way. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 640,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.5.4",
    "description": "Verify shared or default accounts are not present (e.g. \"root\", \"admin\", or \"sa\").",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 16,
      "NIST": [
        "5.1.1.2",
        "A.3"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.5.5",
    "description": "Verify that if an authentication factor is changed or replaced, that the user is notified of this event.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 304,
      "NIST": [
        "6.1.2.3"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.5.6",
    "description": "Verify forgotten password, and other recovery paths use a secure recovery mechanism, such as TOTP or other soft token, mobile push, or another offline recovery mechanism. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 640,
      "NIST": [
        "5.1.1.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.5.7",
    "description": "Verify that if OTP or multi-factor authentication factors are lost, that evidence of identity proofing is performed at the same level as during enrollment.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 308,
      "NIST": [
        "6.1.2.3"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.6.1",
    "description": "Verify that lookup secrets can be used only once.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 308,
      "NIST": [
        "5.1.2.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.6.2",
    "description": "Verify that lookup secrets have sufficient randomness (112 bits of entropy), or if less than 112 bits of entropy, salted with a unique and random 32-bit salt and hashed with an approved one-way hash.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 330,
      "NIST": [
        "5.1.2.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.6.3",
    "description": "Verify that lookup secrets are resistant to offline attacks, such as predictable values.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 310,
      "NIST": [
        "5.1.2.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.7.1",
    "description": "Verify that clear text out of band (NIST \"restricted\") authenticators, such as SMS or PSTN, are not offered by default, and stronger alternatives such as push notifications are offered first.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 287,
      "NIST": [
        "5.1.3.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.7.2",
    "description": "Verify that the out of band verifier expires out of band authentication requests, codes, or tokens after 10 minutes.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 287,
      "NIST": [
        "5.1.3.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.7.3",
    "description": "Verify that the out of band verifier authentication requests, codes, or tokens are only usable once, and only for the original authentication request.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 287,
      "NIST": [
        "5.1.3.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.7.4",
    "description": "Verify that the out of band authenticator and verifier communicates over a secure independent channel.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 523,
      "NIST": [
        "5.1.3.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.7.5",
    "description": "Verify that the out of band verifier retains only a hashed version of the authentication code.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 256,
      "NIST": [
        "5.1.3.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.7.6",
    "description": "Verify that the initial authentication code is generated by a secure random number generator, containing at least 20 bits of entropy (typically a six digital random number is sufficient).",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 310,
      "NIST": [
        "5.1.3.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.8.1",
    "description": "Verify that time-based OTPs have a defined lifetime before expiring.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 613,
      "NIST": [
        "5.1.4.2",
        "5.1.5.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.8.2",
    "description": "Verify that symmetric keys used to verify submitted OTPs are highly protected, such as by using a hardware security module or secure operating system based key storage.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 320,
      "NIST": [
        "5.1.4.2",
        "5.1.5.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.8.3",
    "description": "Verify that approved cryptographic algorithms are used in the generation, seeding, and verification.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 326,
      "NIST": [
        "5.1.4.2",
        "5.1.5.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.8.4",
    "description": "Verify that time-based OTP can be used only once within the validity period.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 287,
      "NIST": [
        "5.1.4.2",
        "5.1.5.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.8.5",
    "description": "Verify that if a time-based multi factor OTP token is re-used during the validity period, it is logged and rejected with secure notifications being sent to the holder of the device.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 287,
      "NIST": [
        "5.1.5.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.8.6",
    "description": "Verify physical single factor OTP generator can be revoked in case of theft or other loss. Ensure that revocation is immediately effective across logged in sessions, regardless of location.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 613,
      "NIST": [
        "5.2.1"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.8.7",
    "description": "Verify that biometric authenticators are limited to use only as secondary factors in conjunction with either something you have and something you know.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 308,
      "NIST": [
        "5.2.3"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.9.1",
    "description": "Verify that cryptographic keys used in verification are stored securely and protected against disclosure, such as using a TPM or HSM, or an OS service that can use this secure storage.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 320,
      "NIST": [
        "5.1.7.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.9.2",
    "description": "Verify that the challenge nonce is at least 64 bits in length, and statistically unique or unique over the lifetime of the cryptographic device.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 330,
      "NIST": [
        "5.1.7.2"
      ]
    }
  },
  {
    "section": "V2",
    "name": "Authentication",
    "itemId": "2.9.3",
    "description": "Verify that approved cryptographic algorithms are used in the generation, seeding, and verification.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 327,
      "NIST": [
        "5.1.7.2"
      ]
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.1.1",
    "description": "Verify the application never reveals session tokens in URL parameters or error messages.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 598,
      "NIST": null
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.2.1",
    "description": "Verify the application generates a new session token on user authentication. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 384,
      "NIST": [
        "7.1"
      ]
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.2.2",
    "description": "Verify that session tokens possess at least 64 bits of entropy. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 331,
      "NIST": [
        "7.1"
      ]
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.2.3",
    "description": "Verify the application only stores session tokens in the browser using secure methods such as appropriately secured cookies (see section 3.4) or HTML 5 session storage.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 539,
      "NIST": [
        "7.1"
      ]
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.2.4",
    "description": "Verify that session token are generated using approved cryptographic algorithms. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 331,
      "NIST": [
        "7.1"
      ]
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.3.1",
    "description": "Verify that logout and expiration invalidate the session token, such that the back button or a downstream relying party does not resume an authenticated session, including across relying parties. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 613,
      "NIST": [
        "7.1"
      ]
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.3.2",
    "description": "If authenticators permit users to remain logged in, verify that re-authentication occurs periodically both when actively used or after an idle period. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": false,
    "l3": false,
    "mappings": {
      "CWE": 613,
      "NIST": [
        "7.2"
      ]
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.3.3",
    "description": "Verify that the application terminates all other active sessions after a successful password change, and that this is effective across the application, federated login (if present), and any relying parties.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 613,
      "NIST": null
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.3.4",
    "description": "Verify that users are able to view and log out of any or all currently active sessions and devices.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 613,
      "NIST": [
        "7.1"
      ]
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.4.1",
    "description": "Verify that cookie-based session tokens have the 'Secure' attribute set. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 614,
      "NIST": [
        "7.1.1"
      ]
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.4.2",
    "description": "Verify that cookie-based session tokens have the 'HttpOnly' attribute set. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 1004,
      "NIST": [
        "7.1.1"
      ]
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.4.3",
    "description": "Verify that cookie-based session tokens utilize the 'SameSite' attribute to limit exposure to cross-site request forgery attacks. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 16,
      "NIST": [
        "7.1.1"
      ]
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.4.4",
    "description": "Verify that cookie-based session tokens use \"__Host-\" prefix (see references) to provide session cookie confidentiality.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 16,
      "NIST": [
        "7.1.1"
      ]
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.4.5",
    "description": "Verify that if the application is published under a domain name with other applications that set or use session cookies that might override or disclose the session cookies, set the path attribute in cookie-based session tokens using the most precise path possible. ([C6](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 16,
      "NIST": [
        "7.1.1"
      ]
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.5.1",
    "description": "Verify the application does not treat OAuth and refresh tokens &mdash; on their own &mdash; as the presence of the subscriber and allows users to terminate trust relationships with linked applications.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 290,
      "NIST": [
        "7.1.2"
      ]
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.5.2",
    "description": "Verify the application uses session tokens rather than static API secrets and keys, except with legacy implementations.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 798,
      "NIST": null
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.5.3",
    "description": "Verify that stateless session tokens use digital signatures, encryption, and other countermeasures to protect against tampering, enveloping, replay, null cipher, and key substitution attacks.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 345,
      "NIST": null
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.6.1",
    "description": "Verify that relying parties specify the maximum authentication time to CSPs and that CSPs re-authenticate the subscriber if they haven't used a session within that period.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 613,
      "NIST": [
        "7.2.1"
      ]
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.6.2",
    "description": "Verify that CSPs inform relying parties of the last authentication event, to allow RPs to determine if they need to re-authenticate the user.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 613,
      "NIST": [
        "7.2.1"
      ]
    }
  },
  {
    "section": "V3",
    "name": "Session",
    "itemId": "3.7.1",
    "description": "Verify the application ensures a valid login session or requires re-authentication or secondary verification before allowing any sensitive transactions or account modifications.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 778,
      "NIST": null
    }
  },
  {
    "section": "V4",
    "name": "Access",
    "itemId": "4.1.1",
    "description": "Verify that the application enforces access control rules on a trusted service layer, especially if client-side access control is present and could be bypassed.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 602,
      "NIST": null
    }
  },
  {
    "section": "V4",
    "name": "Access",
    "itemId": "4.1.2",
    "description": "Verify that all user and data attributes and policy information used by access controls cannot be manipulated by end users unless specifically authorized.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 639,
      "NIST": null
    }
  },
  {
    "section": "V4",
    "name": "Access",
    "itemId": "4.1.3",
    "description": "Verify that the principle of least privilege exists - users should only be able to access functions, data files, URLs, controllers, services, and other resources, for which they possess specific authorization. This implies protection against spoofing and elevation of privilege. ([C7](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 285,
      "NIST": null
    }
  },
  {
    "section": "V4",
    "name": "Access",
    "itemId": "4.1.4",
    "description": "Verify that the principle of deny by default exists whereby new users/roles start with minimal or no permissions and users/roles do not receive access to new features until access is explicitly assigned.  ([C7](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 276,
      "NIST": null
    }
  },
  {
    "section": "V4",
    "name": "Access",
    "itemId": "4.1.5",
    "description": "Verify that access controls fail securely including when an exception occurs. ([C10](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 285,
      "NIST": null
    }
  },
  {
    "section": "V4",
    "name": "Access",
    "itemId": "4.2.1",
    "description": "Verify that sensitive data and APIs are protected against direct object attacks targeting creation, reading, updating and deletion of records, such as creating or updating someone else's record, viewing everyone's records, or deleting all records.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 639,
      "NIST": null
    }
  },
  {
    "section": "V4",
    "name": "Access",
    "itemId": "4.2.2",
    "description": "Verify that the application or framework enforces a strong anti-CSRF mechanism to protect authenticated functionality, and effective anti-automation or anti-CSRF protects unauthenticated functionality.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 352,
      "NIST": null
    }
  },
  {
    "section": "V4",
    "name": "Access",
    "itemId": "4.3.1",
    "description": "Verify administrative interfaces use appropriate multi-factor authentication to prevent unauthorized use.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 419,
      "NIST": null
    }
  },
  {
    "section": "V4",
    "name": "Access",
    "itemId": "4.3.2",
    "description": "Verify that directory browsing is disabled unless deliberately desired. Additionally, applications should not allow discovery or disclosure of file or directory metadata, such as Thumbs.db, .DS_Store, .git or .svn folders.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 548,
      "NIST": null
    }
  },
  {
    "section": "V4",
    "name": "Access",
    "itemId": "4.3.3",
    "description": "Verify the application has additional authorization (such as step up or adaptive authentication) for lower value systems, and / or segregation of duties for high value applications to enforce anti-fraud controls as per the risk of application and past fraud.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 732,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.1.1",
    "description": "Verify that the application has defenses against HTTP parameter pollution attacks, particularly if the application framework makes no distinction about the source of request parameters (GET, POST, cookies, headers, or environment variables).",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 235,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.1.2",
    "description": "Verify that frameworks protect against mass parameter assignment attacks, or that the application has countermeasures to protect against unsafe parameter assignment, such as marking fields private or similar. ([C5](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 915,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.1.3",
    "description": "Verify that all input (HTML form fields, REST requests, URL parameters, HTTP headers, cookies, batch files, RSS feeds, etc) is validated using positive validation (whitelisting). ([C5](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 20,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.1.4",
    "description": "Verify that structured data is strongly typed and validated against a defined schema including allowed characters, length and pattern (e.g. credit card numbers or telephone, or validating that two related fields are reasonable, such as checking that suburb and zip/postcode match). ([C5](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 20,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.1.5",
    "description": "Verify that URL redirects and forwards only allow whitelisted destinations, or show a warning when redirecting to potentially untrusted content.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 601,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.2.1",
    "description": "Verify that all untrusted HTML input from WYSIWYG editors or similar is properly sanitized with an HTML sanitizer library or framework feature. ([C5](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 116,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.2.2",
    "description": "Verify that unstructured data is sanitized to enforce safety measures such as allowed characters and length.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 138,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.2.3",
    "description": "Verify that the application sanitizes user input before passing to mail systems to protect against SMTP or IMAP injection.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 147,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.2.4",
    "description": "Verify that the application avoids the use of eval() or other dynamic code execution features. Where there is no alternative, any user input being included must be sanitized or sandboxed before being executed.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 95,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.2.5",
    "description": "Verify that the application protects against template injection attacks by ensuring that any user input being included is sanitized or sandboxed.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 94,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.2.6",
    "description": "Verify that the application protects against SSRF attacks, by validating or sanitizing untrusted data or HTTP file metadata, such as filenames and URL input fields, use whitelisting of protocols, domains, paths and ports.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 918,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.2.7",
    "description": "Verify that the application sanitizes, disables, or sandboxes user-supplied SVG scriptable content, especially as they relate to XSS resulting from inline scripts, and foreignObject.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 159,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.2.8",
    "description": "Verify that the application sanitizes, disables, or sandboxes user-supplied scriptable or expression template language content, such as Markdown, CSS or XSL stylesheets, BBCode, or similar.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 94,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.3.1",
    "description": "Verify that output encoding is relevant for the interpreter and context required. For example, use encoders specifically for HTML values, HTML attributes, JavaScript, URL Parameters, HTTP headers, SMTP, and others as the context requires, especially from untrusted inputs (e.g. names with Unicode or apostrophes, such as „Å≠„Åì or O'Hara). ([C4](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 116,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.3.10",
    "description": "Verify that the application protects against XPath injection or XML injection attacks. ([C4](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 643,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.3.2",
    "description": "Verify that output encoding preserves the user's chosen character set and locale, such that any Unicode character point is valid and safely handled. ([C4](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 176,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.3.3",
    "description": "Verify that context-aware, preferably automated - or at worst, manual - output escaping protects against reflected, stored, and DOM based XSS. ([C4](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 79,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.3.4",
    "description": "Verify that data selection or database queries (e.g. SQL, HQL, ORM, NoSQL) use parameterized queries, ORMs, entity frameworks, or are otherwise protected from database injection attacks. ([C3](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 89,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.3.5",
    "description": "Verify that where parameterized or safer mechanisms are not present, context-specific output encoding is used to protect against injection attacks, such as the use of SQL escaping to protect against SQL injection. ([C3, C4](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 89,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.3.6",
    "description": "Verify that the application projects against JavaScript or JSON injection attacks, including for eval attacks, remote JavaScript includes, CSP bypasses, DOM XSS, and JavaScript expression evaluation. ([C4](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 830,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.3.7",
    "description": "Verify that the application protects against LDAP Injection vulnerabilities, or that specific security controls to prevent LDAP Injection have been implemented. ([C4](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 943,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.3.8",
    "description": "Verify that the application protects against OS command injection and that operating system calls use parameterized OS queries or use contextual command line output encoding. ([C4](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 78,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.3.9",
    "description": "Verify that the application protects against Local File Inclusion (LFI) or Remote File Inclusion (RFI) attacks.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 829,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.4.1",
    "description": "Verify that the application uses memory-safe string, safer memory copy and pointer arithmetic to detect or prevent stack, buffer, or heap overflows.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 120,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.4.2",
    "description": "Verify that format strings do not take potentially hostile input, and are constant.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 134,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.4.3",
    "description": "Verify that sign, range, and input validation techniques are used to prevent integer overflows.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 190,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.5.1",
    "description": "Verify that serialized objects use integrity checks or are encrypted to prevent hostile object creation or data tampering. ([C5](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 502,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.5.2",
    "description": "Verify that the application correctly restricts XML parsers to only use the most restrictive configuration possible and to ensure that unsafe features such as resolving external entities are disabled to prevent XXE.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 611,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.5.3",
    "description": "Verify that deserialization of untrusted data is avoided or is protected in both custom code and third-party libraries (such as JSON, XML and YAML parsers).",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 502,
      "NIST": null
    }
  },
  {
    "section": "V5",
    "name": "Validation",
    "itemId": "5.5.4",
    "description": "Verify that when parsing JSON in browsers or JavaScript-based backends, JSON.parse is used to parse the JSON document. Do not use eval() to parse JSON.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 95,
      "NIST": null
    }
  },
  {
    "section": "V6",
    "name": "Cryptography",
    "itemId": "6.1.1",
    "description": "Verify that regulated private data is stored encrypted while at rest, such as personally identifiable information (PII), sensitive personal information, or data assessed likely to be subject to EU's GDPR.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 311,
      "NIST": null
    }
  },
  {
    "section": "V6",
    "name": "Cryptography",
    "itemId": "6.1.2",
    "description": "Verify that regulated health data is stored encrypted while at rest, such as medical records, medical device details, or de-anonymized research records.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 311,
      "NIST": null
    }
  },
  {
    "section": "V6",
    "name": "Cryptography",
    "itemId": "6.1.3",
    "description": "Verify that regulated financial data is stored encrypted while at rest, such as financial accounts, defaults or credit history, tax records, pay history, beneficiaries, or de-anonymized market or research records.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 311,
      "NIST": null
    }
  },
  {
    "section": "V6",
    "name": "Cryptography",
    "itemId": "6.2.1",
    "description": "Verify that all cryptographic modules fail securely, and errors are handled in a way that does not enable Padding Oracle attacks.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 310,
      "NIST": null
    }
  },
  {
    "section": "V6",
    "name": "Cryptography",
    "itemId": "6.2.2",
    "description": "Verify that industry proven or government approved cryptographic algorithms, modes, and libraries are used, instead of custom coded cryptography. ([C8](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 327,
      "NIST": null
    }
  },
  {
    "section": "V6",
    "name": "Cryptography",
    "itemId": "6.2.3",
    "description": "Verify that encryption initialization vector, cipher configuration, and block modes are configured securely using the latest advice.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 326,
      "NIST": null
    }
  },
  {
    "section": "V6",
    "name": "Cryptography",
    "itemId": "6.2.4",
    "description": "Verify that random number, encryption or hashing algorithms, key lengths, rounds, ciphers or modes, can be reconfigured, upgraded, or swapped at any time, to protect against cryptographic breaks. ([C8](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 326,
      "NIST": null
    }
  },
  {
    "section": "V6",
    "name": "Cryptography",
    "itemId": "6.2.5",
    "description": "Verify that known insecure block modes (i.e. ECB, etc.), padding modes (i.e. PKCS#1 v1.5, etc.), ciphers with small block sizes (i.e. Triple-DES, Blowfish, etc.), and weak hashing algorithms (i.e. MD5, SHA1, etc.) are not used unless required for backwards compatibility.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 326,
      "NIST": null
    }
  },
  {
    "section": "V6",
    "name": "Cryptography",
    "itemId": "6.2.6",
    "description": "Verify that nonces, initialization vectors, and other single use numbers must not be used more than once with a given encryption key. The method of generation must be appropriate for the algorithm being used.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 326,
      "NIST": null
    }
  },
  {
    "section": "V6",
    "name": "Cryptography",
    "itemId": "6.2.7",
    "description": "Verify that encrypted data is authenticated via signatures, authenticated cipher modes, or HMAC to ensure that ciphertext is not altered by an unauthorized party.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 326,
      "NIST": null
    }
  },
  {
    "section": "V6",
    "name": "Cryptography",
    "itemId": "6.2.8",
    "description": "Verify that all cryptographic operations are constant-time, with no 'short-circuit' operations in comparisons, calculations, or returns, to avoid leaking information.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 385,
      "NIST": null
    }
  },
  {
    "section": "V6",
    "name": "Cryptography",
    "itemId": "6.3.1",
    "description": "Verify that all random numbers, random file names, random GUIDs, and random strings are generated using the cryptographic module's approved cryptographically secure random number generator when these random values are intended to be not guessable by an attacker.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 338,
      "NIST": null
    }
  },
  {
    "section": "V6",
    "name": "Cryptography",
    "itemId": "6.3.2",
    "description": "Verify that random GUIDs are created using the GUID v4 algorithm, and a cryptographically-secure pseudo-random number generator (CSPRNG). GUIDs created using other pseudo-random number generators may be predictable.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 338,
      "NIST": null
    }
  },
  {
    "section": "V6",
    "name": "Cryptography",
    "itemId": "6.3.3",
    "description": "Verify that random numbers are created with proper entropy even when the application is under heavy load, or that the application degrades gracefully in such circumstances.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 338,
      "NIST": null
    }
  },
  {
    "section": "V6",
    "name": "Cryptography",
    "itemId": "6.4.1",
    "description": "Verify that a secrets management solution such as a key vault is used to securely create, store, control access to and destroy secrets. ([C8](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 798,
      "NIST": null
    }
  },
  {
    "section": "V6",
    "name": "Cryptography",
    "itemId": "6.4.2",
    "description": "Verify that key material is not exposed to the application but instead uses an isolated security module like a vault for cryptographic operations. ([C8](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 320,
      "NIST": null
    }
  },
  {
    "section": "V7",
    "name": "Error",
    "itemId": "7.1.1",
    "description": "Verify that the application does not log credentials or payment details. Session tokens should only be stored in logs in an irreversible, hashed form. ([C9, C10](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 532,
      "NIST": null
    }
  },
  {
    "section": "V7",
    "name": "Error",
    "itemId": "7.1.2",
    "description": "Verify that the application does not log other sensitive data as defined under local privacy laws or relevant security policy. ([C9](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 532,
      "NIST": null
    }
  },
  {
    "section": "V7",
    "name": "Error",
    "itemId": "7.1.3",
    "description": "Verify that the application logs security relevant events including successful and failed authentication events, access control failures, deserialization failures and input validation failures. ([C5, C7](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 778,
      "NIST": null
    }
  },
  {
    "section": "V7",
    "name": "Error",
    "itemId": "7.1.4",
    "description": "Verify that each log event includes necessary information that would allow for a detailed investigation of the timeline when an event happens. ([C9](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 778,
      "NIST": null
    }
  },
  {
    "section": "V7",
    "name": "Error",
    "itemId": "7.2.1",
    "description": "Verify that all authentication decisions are logged, without storing sensitive session identifiers or passwords. This should include requests with relevant metadata needed for security investigations.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 778,
      "NIST": null
    }
  },
  {
    "section": "V7",
    "name": "Error",
    "itemId": "7.2.2",
    "description": "Verify that all access control decisions can be logged and all failed decisions are logged. This should include requests with relevant metadata needed for security investigations.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 285,
      "NIST": null
    }
  },
  {
    "section": "V7",
    "name": "Error",
    "itemId": "7.3.1",
    "description": "Verify that the application appropriately encodes user-supplied data to prevent log injection. ([C9](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 117,
      "NIST": null
    }
  },
  {
    "section": "V7",
    "name": "Error",
    "itemId": "7.3.2",
    "description": "Verify that all events are protected from injection when viewed in log viewing software. ([C9](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 117,
      "NIST": null
    }
  },
  {
    "section": "V7",
    "name": "Error",
    "itemId": "7.3.3",
    "description": "Verify that security logs are protected from unauthorized access and modification. ([C9](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 200,
      "NIST": null
    }
  },
  {
    "section": "V7",
    "name": "Error",
    "itemId": "7.3.4",
    "description": "Verify that time sources are synchronized to the correct time and time zone. Strongly consider logging only in UTC if systems are global to assist with post-incident forensic analysis. ([C9](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": null,
      "NIST": null
    }
  },
  {
    "section": "V7",
    "name": "Error",
    "itemId": "7.4.1",
    "description": "Verify that a generic message is shown when an unexpected or security sensitive error occurs, potentially with a unique ID which support personnel can use to investigate.  ([C10](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 210,
      "NIST": null
    }
  },
  {
    "section": "V7",
    "name": "Error",
    "itemId": "7.4.2",
    "description": "Verify that exception handling (or a functional equivalent) is used across the codebase to account for expected and unexpected error conditions. ([C10](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 544,
      "NIST": null
    }
  },
  {
    "section": "V7",
    "name": "Error",
    "itemId": "7.4.3",
    "description": "Verify that a \"last resort\" error handler is defined which will catch all unhandled exceptions. ([C10](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 460,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.1.1",
    "description": "Verify the application protects sensitive data from being cached in server components such as load balancers and application caches.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 524,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.1.2",
    "description": "Verify that all cached or temporary copies of sensitive data stored on the server are protected from unauthorized access or purged/invalidated after the authorized user accesses the sensitive data.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 524,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.1.3",
    "description": "Verify the application minimizes the number of parameters in a request, such as hidden fields, Ajax variables, cookies and header values.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 233,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.1.4",
    "description": "Verify the application can detect and alert on abnormal numbers of requests, such as by IP, user, total per hour or day, or whatever makes sense for the application.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 770,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.1.5",
    "description": "Verify that regular backups of important data are performed and that test restoration of data is performed.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 19,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.1.6",
    "description": "Verify that backups are stored securely to prevent data from being stolen or corrupted.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 19,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.2.1",
    "description": "Verify the application sets sufficient anti-caching headers so that sensitive data is not cached in modern browsers.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 525,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.2.2",
    "description": "Verify that data stored in client side storage (such as HTML5 local storage, session storage, IndexedDB, regular cookies or Flash cookies) does not contain sensitive data or PII.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 922,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.2.3",
    "description": "Verify that authenticated data is cleared from client storage, such as the browser DOM, after the client or session is terminated.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 922,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.3.1",
    "description": "Verify that sensitive data is sent to the server in the HTTP message body or headers, and that query string parameters from any HTTP verb do not contain sensitive data.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 319,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.3.2",
    "description": "Verify that users have a method to remove or export their data on demand.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 212,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.3.3",
    "description": "Verify that users are provided clear language regarding collection and use of supplied personal information and that users have provided opt-in consent for the use of that data before it is used in any way.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 285,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.3.4",
    "description": "Verify that all sensitive data created and processed by the application has been identified, and ensure that a policy is in place on how to deal with sensitive data. ([C8](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 200,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.3.5",
    "description": "Verify accessing sensitive data is audited (without logging the sensitive data itself), if the data is collected under relevant data protection directives or where logging of access is required.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 532,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.3.6",
    "description": "Verify that sensitive information contained in memory is overwritten as soon as it is no longer required to mitigate memory dumping attacks, using zeroes or random data.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 226,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.3.7",
    "description": "Verify that sensitive or private information that is required to be encrypted, is encrypted using approved algorithms that provide both confidentiality and integrity. ([C8](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 327,
      "NIST": null
    }
  },
  {
    "section": "V8",
    "name": "Data",
    "itemId": "8.3.8",
    "description": "Verify that sensitive personal information is subject to data retention classification, such that old or out of date data is deleted automatically, on a schedule, or as the situation requires.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 285,
      "NIST": null
    }
  },
  {
    "section": "V9",
    "name": "Communications",
    "itemId": "9.1.1",
    "description": "Verify that secured TLS is used for all client connectivity, and does not fall back to insecure or unencrypted protocols. ([C8](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 319,
      "NIST": null
    }
  },
  {
    "section": "V9",
    "name": "Communications",
    "itemId": "9.1.2",
    "description": "Verify using online or up to date TLS testing tools that only strong algorithms, ciphers, and protocols are enabled, with the strongest algorithms and ciphers set as preferred.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 326,
      "NIST": null
    }
  },
  {
    "section": "V9",
    "name": "Communications",
    "itemId": "9.1.3",
    "description": "Verify that old versions of SSL and TLS protocols, algorithms, ciphers, and configuration are disabled, such as SSLv2, SSLv3, or TLS 1.0 and TLS 1.1. The latest version of TLS should be the preferred cipher suite.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 326,
      "NIST": null
    }
  },
  {
    "section": "V9",
    "name": "Communications",
    "itemId": "9.2.1",
    "description": "Verify that connections to and from the server use trusted TLS certificates. Where internally generated or self-signed certificates are used, the server must be configured to only trust specific internal CAs and specific self-signed certificates. All others should be rejected.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 295,
      "NIST": null
    }
  },
  {
    "section": "V9",
    "name": "Communications",
    "itemId": "9.2.2",
    "description": "Verify that encrypted communications such as TLS is used for all inbound and outbound connections, including for management ports, monitoring, authentication, API, or web service calls, database, cloud, serverless, mainframe, external, and partner connections. The server must not fall back to insecure or unencrypted protocols.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 319,
      "NIST": null
    }
  },
  {
    "section": "V9",
    "name": "Communications",
    "itemId": "9.2.3",
    "description": "Verify that all encrypted connections to external systems that involve sensitive information or functions are authenticated.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 287,
      "NIST": null
    }
  },
  {
    "section": "V9",
    "name": "Communications",
    "itemId": "9.2.4",
    "description": "Verify that proper certification revocation, such as Online Certificate Status Protocol (OCSP) Stapling, is enabled and configured.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 299,
      "NIST": null
    }
  },
  {
    "section": "V9",
    "name": "Communications",
    "itemId": "9.2.5",
    "description": "Verify that backend TLS connection failures are logged.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 544,
      "NIST": null
    }
  },
  {
    "section": "V10",
    "name": "Malicious",
    "itemId": "10.1.1",
    "description": "Verify that a code analysis tool is in use that can detect potentially malicious code, such as time functions, unsafe file operations and network connections.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 749,
      "NIST": null
    }
  },
  {
    "section": "V10",
    "name": "Malicious",
    "itemId": "10.2.1",
    "description": "Verify that the application source code and third party libraries do not contain unauthorized phone home or data collection capabilities. Where such functionality exists, obtain the user's permission for it to operate  before collecting any data.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 359,
      "NIST": null
    }
  },
  {
    "section": "V10",
    "name": "Malicious",
    "itemId": "10.2.2",
    "description": "Verify that the application does not ask for unnecessary or excessive permissions to privacy related features or sensors, such as contacts, cameras, microphones, or location.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 272,
      "NIST": null
    }
  },
  {
    "section": "V10",
    "name": "Malicious",
    "itemId": "10.2.3",
    "description": "Verify that the application source code and third party libraries do not contain back doors, such as hard-coded or additional undocumented accounts or keys, code obfuscation, undocumented binary blobs, rootkits, or anti-debugging, insecure debugging features, or otherwise out of date, insecure, or hidden functionality that could be used maliciously if discovered.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 507,
      "NIST": null
    }
  },
  {
    "section": "V10",
    "name": "Malicious",
    "itemId": "10.2.4",
    "description": "Verify that the application source code and third party libraries does not contain time bombs by searching for date and time related functions.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 511,
      "NIST": null
    }
  },
  {
    "section": "V10",
    "name": "Malicious",
    "itemId": "10.2.5",
    "description": "Verify that the application source code and third party libraries does not contain malicious code, such as salami attacks, logic bypasses, or logic bombs.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 511,
      "NIST": null
    }
  },
  {
    "section": "V10",
    "name": "Malicious",
    "itemId": "10.2.6",
    "description": "Verify that the application source code and third party libraries do not contain Easter eggs or any other potentially unwanted functionality.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": 507,
      "NIST": null
    }
  },
  {
    "section": "V10",
    "name": "Malicious",
    "itemId": "10.3.1",
    "description": "Verify that if the application has a client or server auto-update feature, updates should be obtained over secure channels and digitally signed. The update code must validate the digital signature of the update before installing or executing the update.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 16,
      "NIST": null
    }
  },
  {
    "section": "V10",
    "name": "Malicious",
    "itemId": "10.3.2",
    "description": "Verify that the application employs integrity protections, such as code signing or sub-resource integrity. The application must not load or execute code from untrusted sources, such as loading includes, modules, plugins, code, or libraries from untrusted sources or the Internet.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 353,
      "NIST": null
    }
  },
  {
    "section": "V10",
    "name": "Malicious",
    "itemId": "10.3.3",
    "description": "Verify that the application has protection from sub-domain takeovers if the application relies upon DNS entries or DNS sub-domains, such as expired domain names, out of date DNS pointers or CNAMEs, expired projects at public source code repos, or transient cloud APIs, serverless functions, or storage buckets (autogen-bucket-id.cloud.example.com) or similar. Protections can include ensuring that DNS names used by applications are regularly checked for expiry or change.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 350,
      "NIST": null
    }
  },
  {
    "section": "V11",
    "name": "BusLogic",
    "itemId": "11.1.1",
    "description": "Verify the application will only process business logic flows for the same user in sequential step order and without skipping steps.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 841,
      "NIST": null
    }
  },
  {
    "section": "V11",
    "name": "BusLogic",
    "itemId": "11.1.2",
    "description": "Verify the application will only process business logic flows with all steps being processed in realistic human time, i.e. transactions are not submitted too quickly.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 779,
      "NIST": null
    }
  },
  {
    "section": "V11",
    "name": "BusLogic",
    "itemId": "11.1.3",
    "description": "Verify the application has appropriate limits for specific business actions or transactions which are correctly enforced on a per user basis.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 770,
      "NIST": null
    }
  },
  {
    "section": "V11",
    "name": "BusLogic",
    "itemId": "11.1.4",
    "description": "Verify the application has sufficient anti-automation controls to detect and protect against data exfiltration, excessive business logic requests, excessive file uploads or denial of service attacks.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 770,
      "NIST": null
    }
  },
  {
    "section": "V11",
    "name": "BusLogic",
    "itemId": "11.1.5",
    "description": "Verify the application has business logic limits or validation to protect against likely business risks or threats, identified using threat modelling or similar methodologies.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 841,
      "NIST": null
    }
  },
  {
    "section": "V11",
    "name": "BusLogic",
    "itemId": "11.1.6",
    "description": "Verify the application does not suffer from \"time of check to time of use\" (TOCTOU) issues or other race conditions for sensitive operations.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 367,
      "NIST": null
    }
  },
  {
    "section": "V11",
    "name": "BusLogic",
    "itemId": "11.1.7",
    "description": "Verify the application monitors for unusual events or activity from a business logic perspective. For example, attempts to perform actions out of order or actions which a normal user would never attempt. ([C9](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 754,
      "NIST": null
    }
  },
  {
    "section": "V11",
    "name": "BusLogic",
    "itemId": "11.1.8",
    "description": "Verify the application has configurable alerting when automated attacks or unusual activity is detected.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 390,
      "NIST": null
    }
  },
  {
    "section": "V12",
    "name": "Files",
    "itemId": "12.1.1",
    "description": "Verify that the application will not accept large files that could fill up storage or cause a denial of service attack.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 400,
      "NIST": null
    }
  },
  {
    "section": "V12",
    "name": "Files",
    "itemId": "12.1.2",
    "description": "Verify that compressed files are checked for \"zip bombs\" - small input files that will decompress into huge files thus exhausting file storage limits.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 409,
      "NIST": null
    }
  },
  {
    "section": "V12",
    "name": "Files",
    "itemId": "12.1.3",
    "description": "Verify that a file size quota and maximum number of files per user is enforced to ensure that a single user cannot fill up the storage with too many files, or excessively large files.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 770,
      "NIST": null
    }
  },
  {
    "section": "V12",
    "name": "Files",
    "itemId": "12.2.1",
    "description": "Verify that files obtained from untrusted sources are validated to be of expected type based on the file's content.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 434,
      "NIST": null
    }
  },
  {
    "section": "V12",
    "name": "Files",
    "itemId": "12.3.1",
    "description": "Verify that user-submitted filename metadata is not used directly with system or framework file and URL API to protect against path traversal.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 22,
      "NIST": null
    }
  },
  {
    "section": "V12",
    "name": "Files",
    "itemId": "12.3.2",
    "description": "Verify that user-submitted filename metadata is validated or ignored to prevent the disclosure, creation, updating or removal of local files (LFI).",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 73,
      "NIST": null
    }
  },
  {
    "section": "V12",
    "name": "Files",
    "itemId": "12.3.3",
    "description": "Verify that user-submitted filename metadata is validated or ignored to prevent the disclosure or execution of remote files (RFI), which may also lead to SSRF.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 98,
      "NIST": null
    }
  },
  {
    "section": "V12",
    "name": "Files",
    "itemId": "12.3.4",
    "description": "Verify that the application protects against reflective file download (RFD) by validating or ignoring user-submitted filenames in a JSON, JSONP, or URL parameter, the response Content-Type header should be set to text/plain, and the Content-Disposition header should have a fixed filename.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 641,
      "NIST": null
    }
  },
  {
    "section": "V12",
    "name": "Files",
    "itemId": "12.3.5",
    "description": "Verify that untrusted file metadata is not used directly with system API or libraries, to protect against OS command injection.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 78,
      "NIST": null
    }
  },
  {
    "section": "V12",
    "name": "Files",
    "itemId": "12.3.6",
    "description": "Verify that the application does not include and execute functionality from untrusted sources, such as unverified content distribution networks, JavaScript libraries, node npm libraries, or server-side DLLs.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 829,
      "NIST": null
    }
  },
  {
    "section": "V12",
    "name": "Files",
    "itemId": "12.4.1",
    "description": "Verify that files obtained from untrusted sources are stored outside the web root, with limited permissions, preferably with strong validation.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 922,
      "NIST": null
    }
  },
  {
    "section": "V12",
    "name": "Files",
    "itemId": "12.4.2",
    "description": "Verify that files obtained from untrusted sources are scanned by antivirus scanners to prevent upload of known malicious content.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 509,
      "NIST": null
    }
  },
  {
    "section": "V12",
    "name": "Files",
    "itemId": "12.5.1",
    "description": "Verify that the web tier is configured to serve only files with specific file extensions to prevent unintentional information and source code leakage. For example, backup files (e.g. .bak), temporary working files (e.g. .swp), compressed files (.zip, .tar.gz, etc) and other extensions commonly used by editors should be blocked unless required.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 552,
      "NIST": null
    }
  },
  {
    "section": "V12",
    "name": "Files",
    "itemId": "12.5.2",
    "description": "Verify that direct requests to uploaded files will never be executed as HTML/JavaScript content.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 434,
      "NIST": null
    }
  },
  {
    "section": "V12",
    "name": "Files",
    "itemId": "12.6.1",
    "description": "Verify that the web or application server is configured with a whitelist of resources or systems to which the server can send requests or load data/files from.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 918,
      "NIST": null
    }
  },
  {
    "section": "V13",
    "name": "API",
    "itemId": "13.1.1",
    "description": "Verify that all application components use the same encodings and parsers to avoid parsing attacks that exploit different URI or file parsing behavior that could be used in SSRF and RFI attacks.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 116,
      "NIST": null
    }
  },
  {
    "section": "V13",
    "name": "API",
    "itemId": "13.1.2",
    "description": "Verify that access to administration and management functions is limited to authorized administrators.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 419,
      "NIST": null
    }
  },
  {
    "section": "V13",
    "name": "API",
    "itemId": "13.1.3",
    "description": "Verify API URLs do not expose sensitive information, such as the API key, session tokens etc.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 598,
      "NIST": null
    }
  },
  {
    "section": "V13",
    "name": "API",
    "itemId": "13.1.4",
    "description": "Verify that authorization decisions are made at both the URI, enforced by programmatic or declarative security at the controller or router, and at the resource level, enforced by model-based permissions.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 285,
      "NIST": null
    }
  },
  {
    "section": "V13",
    "name": "API",
    "itemId": "13.1.5",
    "description": "Verify that requests containing unexpected or missing content types are rejected with appropriate headers (HTTP response status 406 Unacceptable or 415 Unsupported Media Type).",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 434,
      "NIST": null
    }
  },
  {
    "section": "V13",
    "name": "API",
    "itemId": "13.2.1",
    "description": "Verify that enabled RESTful HTTP methods are a valid choice for the user or action, such as preventing normal users using DELETE or PUT on protected API or resources.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 650,
      "NIST": null
    }
  },
  {
    "section": "V13",
    "name": "API",
    "itemId": "13.2.2",
    "description": "Verify that JSON schema validation is in place and verified before accepting input.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 20,
      "NIST": null
    }
  },
  {
    "section": "V13",
    "name": "API",
    "itemId": "13.2.3",
    "description": "Verify that RESTful web services that utilize cookies are protected from Cross-Site Request Forgery via the use of at least one or more of the following: triple or double submit cookie pattern (see [references](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet)), CSRF nonces, or ORIGIN request header checks.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 352,
      "NIST": null
    }
  },
  {
    "section": "V13",
    "name": "API",
    "itemId": "13.2.4",
    "description": "Verify that REST services have anti-automation controls to protect against excessive calls, especially if the API is unauthenticated.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 779,
      "NIST": null
    }
  },
  {
    "section": "V13",
    "name": "API",
    "itemId": "13.2.5",
    "description": "Verify that REST services explicitly check the incoming Content-Type to be the expected one, such as application/xml or application/JSON.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 436,
      "NIST": null
    }
  },
  {
    "section": "V13",
    "name": "API",
    "itemId": "13.2.6",
    "description": "Verify that the message headers and payload are trustworthy and not modified in transit. Requiring strong encryption for transport (TLS only) may be sufficient in many cases as it provides both confidentiality and integrity protection. Per-message digital signatures can provide additional assurance on top of the transport protections for high-security applications but bring with them additional complexity and risks to weigh against the benefits.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 345,
      "NIST": null
    }
  },
  {
    "section": "V13",
    "name": "API",
    "itemId": "13.3.1",
    "description": "Verify that XSD schema validation takes place to ensure a properly formed XML document, followed by validation of each input field before any processing of that data takes place.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 20,
      "NIST": null
    }
  },
  {
    "section": "V13",
    "name": "API",
    "itemId": "13.3.2",
    "description": "Verify that the message payload is signed using WS-Security to ensure reliable transport between client and service.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 345,
      "NIST": null
    }
  },
  {
    "section": "V13",
    "name": "API",
    "itemId": "13.4.1",
    "description": "Verify that query whitelisting or a combination of depth limiting and amount limiting should be used to prevent GraphQL or data layer expression denial of service (DoS) as a result of expensive, nested queries. For more advanced scenarios, query cost analysis should be used.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 770,
      "NIST": null
    }
  },
  {
    "section": "V13",
    "name": "API",
    "itemId": "13.4.2",
    "description": "Verify that GraphQL or other data layer authorization logic should be implemented at the business logic layer instead of the GraphQL layer.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 285,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.1.1",
    "description": "Verify that the application build and deployment processes are performed in a secure and repeatable way, such as CI / CD automation, automated configuration management, and automated deployment scripts.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": null,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.1.2",
    "description": "Verify that compiler flags are configured to enable all available buffer overflow protections and warnings, including stack randomization, data execution prevention, and to break the build if an unsafe pointer, memory, format string, integer, or string operations are found.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 120,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.1.3",
    "description": "Verify that server configuration is hardened as per the recommendations of the application server and frameworks in use.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 16,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.1.4",
    "description": "Verify that the application, configuration, and all dependencies can be re-deployed using automated deployment scripts, built from a documented and tested runbook in a reasonable time, or restored from backups in a timely fashion.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": null,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.1.5",
    "description": "Verify that authorized administrators can verify the integrity of all security-relevant configurations to detect tampering.",
    "l1": false,
    "l2": false,
    "l3": true,
    "mappings": {
      "CWE": null,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.2.1",
    "description": "Verify that all components are up to date, preferably using a dependency checker during build or compile time. ([C2](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 1026,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.2.2",
    "description": "Verify that all unneeded features, documentation, samples, configurations are removed, such as sample applications, platform documentation, and default or example users.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 1002,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.2.3",
    "description": "Verify that if application assets, such as JavaScript libraries, CSS stylesheets or web fonts, are hosted externally on a content delivery network (CDN) or external provider, Subresource Integrity (SRI) is used to validate the integrity of the asset.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 714,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.2.4",
    "description": "Verify that third party components come from pre-defined, trusted and continually maintained repositories. ([C2](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 829,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.2.5",
    "description": "Verify that an inventory catalog is maintained of all third party libraries in use. ([C2](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": null,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.2.6",
    "description": "Verify that the attack surface is reduced by sandboxing or encapsulating third party libraries to expose only the required behaviour into the application. ([C2](https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=Formal_Numbering))",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 265,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.3.1",
    "description": "Verify that web or application server and framework error messages are configured to deliver user actionable, customized responses to eliminate any unintended security disclosures.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 209,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.3.2",
    "description": "Verify that web or application server and application framework debug modes are disabled in production to eliminate debug features, developer consoles, and unintended security disclosures.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 497,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.3.3",
    "description": "Verify that the HTTP headers or any part of the HTTP response do not expose detailed version information of system components.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 200,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.4.1",
    "description": "Verify that every HTTP response contains a content type header specifying a safe character set (e.g., UTF-8, ISO 8859-1).",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 173,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.4.2",
    "description": "Verify that all API responses contain Content-Disposition: attachment; filename=\"api.json\" (or other appropriate filename for the content type).",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 116,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.4.3",
    "description": "Verify that a content security policy (CSPv2) is in place that helps mitigate impact for XSS attacks like HTML, DOM, JSON, and JavaScript injection vulnerabilities.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 1021,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.4.4",
    "description": "Verify that all responses contain X-Content-Type-Options: nosniff.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 116,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.4.5",
    "description": "Verify that HTTP Strict Transport Security headers are included on all responses and for all subdomains, such as Strict-Transport-Security: max-age=15724800; includeSubdomains.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 523,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.4.6",
    "description": "Verify that a suitable \"Referrer-Policy\" header is included, such as \"no-referrer\" or \"same-origin\".",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 116,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.4.7",
    "description": "Verify that a suitable X-Frame-Options or Content-Security-Policy: frame-ancestors header is in use for sites where content should not be embedded in a third-party site.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 346,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.5.1",
    "description": "Verify that the application server only accepts the HTTP methods in use by the application or API, including pre-flight OPTIONS.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 749,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.5.2",
    "description": "Verify that the supplied Origin header is not used for authentication or access control decisions, as the Origin header can easily be changed by an attacker.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 346,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.5.3",
    "description": "Verify that the cross-domain resource sharing (CORS) Access-Control-Allow-Origin header uses a strict white-list of trusted domains to match against and does not support the \"null\" origin.",
    "l1": true,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 346,
      "NIST": null
    }
  },
  {
    "section": "V14",
    "name": "Config",
    "itemId": "14.5.4",
    "description": "Verify that HTTP headers added by a trusted proxy or SSO devices, such as a bearer token, are authenticated by the application.",
    "l1": false,
    "l2": true,
    "l3": true,
    "mappings": {
      "CWE": 306,
      "NIST": null
    }
  }
]