import type { DiagramQuestion } from "../types";

export const diagramQuestions: DiagramQuestion[] = [
  {
    id: "q30-1",
    imageUrl: "/diagrams/dumpster-diving-1.png",
    attackName: "Dumpster Diving",
    acceptableNames: [
      "dumpster diving",
      "dumpster",
      "trash diving",
      "google dorking",
    ],
    prevention:
      "Shred sensitive documents before disposal, use secure disposal bins, implement a clean-desk policy",
    acceptablePreventions: [
      "shred",
      "secure disposal",
      "clean desk",
      "destroy",
      "cross-cut",
    ],
    explanation:
      "Dumpster diving involves searching through an organization's trash to find sensitive information such as documents, passwords, or discarded hardware. Attackers look for calendars, memos, phone directories, system manuals, and other items that reveal internal details. Shredding all sensitive documents before disposal is the primary defense.",
  },
  {
    id: "q30-2",
    imageUrl: "/diagrams/shoulder-surfing-2.png",
    attackName: "Shoulder Surfing",
    acceptableNames: [
      "shoulder surfing",
      "shoulder surf",
    ],
    prevention:
      "Use privacy screens on monitors, be aware of surroundings when entering passwords",
    acceptablePreventions: [
      "privacy screen",
      "privacy filter",
      "aware",
      "shield",
      "cover",
      "block view",
    ],
    explanation:
      "Shoulder surfing is a physical social engineering attack where an attacker casually observes someone entering sensitive information such as passwords, PINs, or security codes on a keypad. Privacy screens and situational awareness are the primary defenses.",
  },
  {
    id: "q30-3",
    imageUrl: "/diagrams/tail-gating-3.png",
    attackName: "Tailgating / Piggybacking",
    acceptableNames: [
      "tailgating",
      "piggybacking",
      "piggyback",
      "tailgate",
    ],
    prevention:
      "Use mantraps or security vestibules, require individual badge scanning, security awareness training",
    acceptablePreventions: [
      "mantrap",
      "security vestibule",
      "badge",
      "access control",
      "id card",
      "guard",
      "awareness",
    ],
    explanation:
      "Tailgating (also called piggybacking) occurs when an unauthorized person follows an authorized person through a secured door or entry point. The attacker relies on the authorized person holding the door open or not noticing them. Mantraps, individual badge scanning, and security awareness training are effective countermeasures.",
  },
  {
    id: "q30-4",
    imageUrl: "/diagrams/xss-4.png",
    attackName: "Stored XSS (Cross-Site Scripting)",
    acceptableNames: [
      "xss",
      "cross-site scripting",
      "cross site scripting",
      "stored xss",
      "persistent xss",
    ],
    prevention:
      "Input validation and sanitization, encode output, use Content Security Policy (CSP)",
    acceptablePreventions: [
      "input validation",
      "sanitiz",
      "encode",
      "escap",
      "csp",
      "content security policy",
      "validat",
    ],
    explanation:
      "Cross-Site Scripting (XSS) exploits a website that accepts user input without proper validation. In a stored XSS attack, malicious script is permanently stored on the target server and served to other users. Input validation, output encoding, and Content Security Policy headers are the primary defenses.",
  },
  {
    id: "q30-5",
    imageUrl: "/diagrams/csrf-5.png",
    attackName: "CSRF (Cross-Site Request Forgery)",
    acceptableNames: [
      "csrf",
      "cross-site request forgery",
      "cross site request forgery",
      "xsrf",
      "csfr",
    ],
    prevention:
      "Use anti-CSRF tokens, validate Referer headers, require re-authentication for sensitive actions",
    acceptablePreventions: [
      "token",
      "anti-csrf",
      "csrf token",
      "referer",
      "re-authenticat",
      "same-site cookie",
      "samesite",
    ],
    explanation:
      "Cross-Site Request Forgery (CSRF) takes advantage of an authentication token that a website sends to a user's browser. If a user is authenticated on a site and then visits a malicious page, the new page can inherit the user's identity and perform undesired actions. Anti-CSRF tokens and SameSite cookies are the primary defenses.",
  },
  {
    id: "q30-6",
    imageUrl: "/diagrams/buffer-overflow-6.png",
    attackName: "Buffer Overflow",
    acceptableNames: [
      "buffer overflow",
      "buffer overrun",
      "stack overflow",
      "heap overflow",
    ],
    prevention:
      "Input validation, bounds checking, use safe programming languages, ASLR, DEP",
    acceptablePreventions: [
      "input validation",
      "bounds check",
      "aslr",
      "dep",
      "safe language",
      "canary",
      "stack protect",
      "non-executable",
      "validat",
    ],
    explanation:
      "A buffer overflow occurs when a process stores data beyond the boundaries of a fixed-length buffer, overwriting adjacent memory. This can crash the application or allow attackers to execute arbitrary code. Defenses include compile-time approaches (safe languages, stack canaries, safe libraries) and run-time approaches (ASLR, DEP/NX bit, guard pages).",
  },
  {
    id: "q30-7",
    imageUrl: "/diagrams/dns-poisoning-7.png",
    attackName: "DNS Poisoning",
    acceptableNames: [
      "dns cache poisoning",
      "dns poisoning",
      "dns spoofing",
      "dns hijacking",
    ],
    prevention:
      "Use DNSSEC, flush DNS cache regularly, use trusted DNS servers",
    acceptablePreventions: [
      "dnssec",
      "flush dns",
      "trusted dns",
      "dns security",
    ],
    explanation:
      "DNS poisoning corrupts the DNS resolution process by injecting fraudulent entries, causing a domain name to resolve to an incorrect IP address. Victims are redirected to a malicious site while believing they are visiting a legitimate one. DNSSEC and trusted DNS servers are the primary defenses.",
  },
  {
    id: "q30-8",
    imageUrl: "/diagrams/ddos-8.png",
    attackName: "DDoS (Distributed Denial of Service)",
    acceptableNames: [
      "ddos",
      "dos",
      "distributed denial of service",
      "denial of service",
      "ddos attack",
      "dos attack",
    ],
    prevention:
      "Rate limiting, DDoS protection/mitigation services, traffic filtering, firewalls",
    acceptablePreventions: [
      "rate limit",
      "firewall",
      "ddos protection",
      "traffic filter",
      "load balanc",
      "mitigation",
    ],
    explanation:
      "A Distributed Denial of Service (DDoS) attack uses multiple compromised systems (a botnet) to flood a target with overwhelming traffic, making it unavailable to legitimate users. Rate limiting, dedicated DDoS mitigation services, and traffic filtering are the primary defenses.",
  },
  {
    id: "q30-9",
    imageUrl: "/diagrams/impersonation-9.png",
    attackName: "Impersonation",
    acceptableNames: [
      "impersonation",
      "masquerading",
      "masquerade",
      "identity fraud",
    ],
    prevention:
      "Verify identities, use multi-factor authentication, security awareness training",
    acceptablePreventions: [
      "verify",
      "mfa",
      "multi-factor",
      "two-factor",
      "authentication",
      "awareness",
      "identity",
    ],
    explanation:
      "Impersonation (masquerading) is when an attacker pretends to be a real or fictitious character to gain the victim's trust. The attacker plays the role of that person to extract information or gain unauthorized access. Multi-factor authentication and identity verification are the primary defenses.",
  },
  {
    id: "q30-10",
    imageUrl: "/diagrams/ransomware-10.png",
    attackName: "Ransomware",
    acceptableNames: [
      "ransomware",
      "cryptomalware",
      "crypto-malware",
      "ransom",
    ],
    prevention:
      "Regular backups, antimalware software, security awareness training, keep systems patched",
    acceptablePreventions: [
      "backup",
      "antimalware",
      "antivirus",
      "patch",
      "update",
      "awareness",
    ],
    explanation:
      "Ransomware prevents a user's device from functioning properly until a fee is paid. Cryptomalware encrypts all files so none can be opened without a decryption key. Regular offline backups, up-to-date antimalware, patch management, and user awareness training are the primary defenses.",
  },
  {
    id: "q30-11",
    imageUrl: "/diagrams/dns-poisoning-11.png",
    attackName: "DNS Poisoning",
    acceptableNames: [
      "dns poisoning",
      "dns spoofing",
      "dns cache poisoning",
      "dns hijacking",
    ],
    prevention:
      "Use DNSSEC, use trusted DNS servers, monitor DNS traffic",
    acceptablePreventions: [
      "dnssec",
      "trusted dns",
      "monitor dns",
      "dns security",
    ],
    explanation:
      "DNS poisoning corrupts the DNS resolution process so that queries return incorrect IP addresses, redirecting victims to attacker-controlled servers. DNSSEC adds cryptographic verification to DNS responses to prevent tampering.",
  },
  {
    id: "q30-12",
    imageUrl: "/diagrams/arp-spoofing-12.png",
    attackName: "ARP Spoofing",
    acceptableNames: [
      "arp spoofing",
      "arp poisoning",
      "arp spoof",
      "arp cache poisoning",
    ],
    prevention:
      "Use static ARP entries, Dynamic ARP Inspection (DAI), use VPN",
    acceptablePreventions: [
      "static arp",
      "dai",
      "dynamic arp inspection",
      "arp inspection",
      "vpn",
    ],
    explanation:
      "ARP Spoofing sends falsified ARP messages over a local network, linking the attacker's MAC address to the IP address of a legitimate host. Traffic meant for that IP is redirected to the attacker, enabling man-in-the-middle interception. Static ARP entries and Dynamic ARP Inspection (DAI) are the primary defenses.",
  },
  {
    id: "q30-13",
    imageUrl: "/diagrams/smurf-13.png",
    attackName: "Smurf Attack (Amplification DDoS)",
    acceptableNames: [
      "smurf",
      "smurf attack",
      "amplification",
      "reflection",
      "amplification ddos",
      "reflection ddos",
      "icmp flood",
    ],
    prevention:
      "Disable IP-directed broadcasts, configure routers to not forward broadcast traffic",
    acceptablePreventions: [
      "disable broadcast",
      "ip directed broadcast",
      "router config",
      "broadcast",
      "firewall",
      "ingress filter",
    ],
    explanation:
      "A Smurf Attack is an amplification/reflection DDoS attack that sends spoofed ICMP ping requests to a network's broadcast address using the victim's IP as the source. Every host on the network responds, flooding the victim with echo replies. Disabling IP-directed broadcasts on routers is the primary defense. (Note: The lecture slides refer to this as 'Smurf Attack' — verify with your course slides if 'Amplification DDoS' is also accepted.)",
  },
  {
    id: "q30-14",
    imageUrl: "/diagrams/ip-spoofing-14.png",
    attackName: "IP Spoofing",
    acceptableNames: [
      "ip spoofing",
      "spoofing",
      "ip spoof",
      "address spoofing",
    ],
    prevention:
      "Ingress/egress packet filtering, use authentication protocols",
    acceptablePreventions: [
      "packet filter",
      "ingress",
      "egress",
      "filtering",
      "authentication",
      "firewall",
    ],
    explanation:
      "IP Spoofing involves forging the source IP address in packet headers to disguise the attacker's identity or impersonate a trusted host. It is frequently used as a component of other attacks like DDoS, MitM, and session hijacking. Ingress and egress filtering at the network perimeter are the primary defenses.",
  },
  {
    id: "q30-15",
    imageUrl: "/diagrams/pharming-15.png",
    attackName: "Pharming",
    acceptableNames: [
      "pharming",
      "domain hijacking",
      "url redirection",
      "dns redirection",
    ],
    prevention:
      "Use DNSSEC, keep hosts file secure, verify SSL certificates",
    acceptablePreventions: [
      "dnssec",
      "hosts file",
      "ssl",
      "certificate",
      "https",
      "verify url",
    ],
    explanation:
      "Pharming exploits how a URL is converted into its corresponding IP address, redirecting users from legitimate sites to fraudulent ones without their knowledge. Unlike phishing, pharming does not require the user to click a malicious link — the redirection happens automatically. DNSSEC and SSL certificate verification are the primary defenses. (Note: The lecture slides use the term 'Pharming' — 'Domain Hijacking' is not explicitly mentioned in the slides. Verify with your course slides.)",
  },
];
