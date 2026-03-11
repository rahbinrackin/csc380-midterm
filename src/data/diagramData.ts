import type { DiagramQuestion } from "../types";

export const diagramQuestions: DiagramQuestion[] = [
  {
    id: "d1",
    imageUrl: "/diagrams/lec4-53.png",
    attackName: "Man-in-the-Middle (MitM)",
    acceptableNames: [
      "mitm",
      "man in the middle",
      "man-in-the-middle",
      "mitm attack",
      "man in the middle attack",
    ],
    prevention:
      "Use encrypted communication protocols (HTTPS/TLS), certificate pinning, VPN",
    acceptablePreventions: [
      "encryption",
      "https",
      "tls",
      "ssl",
      "vpn",
      "certificate",
      "encrypted",
    ],
    explanation:
      "A Man-in-the-Middle attack occurs when an attacker secretly intercepts and potentially alters communication between two parties who believe they are communicating directly with each other. The attacker positions themselves between the sender and receiver, relaying messages while having the ability to read, modify, or inject new data. This attack is especially dangerous on unsecured Wi-Fi networks and can be mitigated through strong encryption and certificate validation.",
  },
  {
    id: "d2",
    imageUrl: "/diagrams/lec4-55.png",
    attackName: "ARP Spoofing/Poisoning",
    acceptableNames: [
      "arp spoofing",
      "arp poisoning",
      "arp spoof",
      "arp cache poisoning",
    ],
    prevention:
      "Use static ARP entries, implement Dynamic ARP Inspection (DAI), use VPN",
    acceptablePreventions: [
      "static arp",
      "dai",
      "dynamic arp inspection",
      "arp inspection",
      "vpn",
    ],
    explanation:
      "ARP Spoofing involves sending falsified ARP (Address Resolution Protocol) messages over a local network, linking the attacker's MAC address to the IP address of a legitimate host. This causes traffic meant for that IP address to be redirected to the attacker instead. Once successful, the attacker can intercept, modify, or stop data in transit, effectively enabling a man-in-the-middle position on the LAN.",
  },
  {
    id: "d3",
    imageUrl: "/diagrams/lec4-56.png",
    attackName: "DNS Hijacking/Poisoning",
    acceptableNames: [
      "dns hijacking",
      "dns poisoning",
      "dns spoofing",
      "dns cache poisoning",
    ],
    prevention:
      "Use DNSSEC, regularly flush DNS cache, use trusted DNS servers",
    acceptablePreventions: [
      "dnssec",
      "dns security",
      "flush dns",
      "trusted dns",
    ],
    explanation:
      "DNS Hijacking or Poisoning corrupts the DNS resolution process by injecting fraudulent DNS entries into a resolver's cache. When a victim queries the poisoned DNS server for a domain name, they receive an incorrect IP address that redirects them to a malicious site controlled by the attacker. This can be used for phishing, credential theft, or distributing malware while the victim believes they are visiting a legitimate website.",
  },
  {
    id: "d4",
    imageUrl: "/diagrams/lec4-57.png",
    attackName: "TCP/IP Hijacking",
    acceptableNames: [
      "tcp/ip hijacking",
      "tcp hijacking",
      "session hijacking",
      "tcp/ip session hijacking",
    ],
    prevention:
      "Use encrypted sessions (TLS/SSL), implement proper session management",
    acceptablePreventions: [
      "encryption",
      "tls",
      "ssl",
      "session management",
      "encrypted",
    ],
    explanation:
      "TCP/IP Hijacking exploits the stateful nature of TCP connections by allowing an attacker to take over an established TCP session between two hosts. The attacker predicts or sniffs TCP sequence numbers and injects packets that appear to come from the legitimate communicating party. This gives the attacker unauthorized access to resources and data that were part of the active session without needing to authenticate.",
  },
  {
    id: "d5",
    imageUrl: "/diagrams/lec4-58.png",
    attackName: "DoS/DDoS Attack",
    acceptableNames: [
      "dos",
      "ddos",
      "denial of service",
      "distributed denial of service",
      "dos attack",
      "ddos attack",
    ],
    prevention:
      "Implement rate limiting, use DDoS protection services, configure firewalls",
    acceptablePreventions: [
      "rate limit",
      "firewall",
      "ddos protection",
      "load balancer",
      "traffic filter",
    ],
    explanation:
      "A Denial of Service (DoS) attack overwhelms a target system with excessive traffic or resource requests, rendering it unavailable to legitimate users. In a Distributed Denial of Service (DDoS) variant, the attack traffic originates from many compromised systems (a botnet), making it much harder to block. DDoS attacks target the availability pillar of the CIA triad and can be volumetric, protocol-based, or application-layer attacks.",
  },
  {
    id: "d6",
    imageUrl: "/diagrams/lec4-59.png",
    attackName: "Smurf Attack",
    acceptableNames: ["smurf", "smurf attack"],
    prevention:
      "Disable IP-directed broadcasts, configure routers to not forward broadcast traffic",
    acceptablePreventions: [
      "disable broadcast",
      "broadcast",
      "router config",
      "ip directed broadcast",
      "firewall",
    ],
    explanation:
      "A Smurf Attack is a type of DDoS attack that exploits ICMP (Internet Control Message Protocol) by sending spoofed ping requests to a network's broadcast address with the victim's IP as the source. Every host on the network responds to the broadcast, flooding the victim with a massive volume of ICMP echo replies. The amplification factor makes this attack particularly devastating, as a single packet can generate hundreds of responses.",
  },
  {
    id: "d7",
    imageUrl: "/diagrams/lec4-60.png",
    attackName: "Spoofing",
    acceptableNames: ["spoofing", "ip spoofing", "identity spoofing"],
    prevention:
      "Implement packet filtering, use authentication protocols, ingress/egress filtering",
    acceptablePreventions: [
      "packet filter",
      "authentication",
      "ingress",
      "egress",
      "filtering",
    ],
    explanation:
      "Spoofing is the act of disguising a communication or identity so that it appears to come from a trusted source. IP spoofing involves forging the source IP address in packet headers, while other forms include email spoofing, caller ID spoofing, and MAC spoofing. Spoofing is frequently used as a component of other attacks like DoS, MitM, and session hijacking to hide the attacker's true origin.",
  },
  {
    id: "d8",
    imageUrl: "/diagrams/lec4-61.png",
    attackName: "Driver Manipulation",
    acceptableNames: [
      "driver manipulation",
      "driver shimming",
      "driver attack",
    ],
    prevention:
      "Use driver signing, keep drivers updated, use whitelisting",
    acceptablePreventions: [
      "driver signing",
      "update",
      "whitelist",
      "signed drivers",
    ],
    explanation:
      "Driver Manipulation involves tampering with device drivers—the software that allows the operating system to communicate with hardware. Techniques include shimming (placing code between the OS and the driver to intercept and modify calls) and refactoring (altering the driver's internal logic). Because drivers operate at a high privilege level in the OS kernel, compromised drivers can give attackers deep system access that is difficult to detect.",
  },
  {
    id: "d9",
    imageUrl: "/diagrams/lec4-63.png",
    attackName: "Pass the Hash",
    acceptableNames: ["pass the hash", "hash attack", "pass-the-hash"],
    prevention:
      "Use strong authentication (Kerberos), limit credential caching, use privileged access management",
    acceptablePreventions: [
      "kerberos",
      "credential",
      "privileged access",
      "strong authentication",
      "mfa",
    ],
    explanation:
      "Pass the Hash is an attack technique where an attacker captures the hashed version of a user's password and uses it directly to authenticate to a service without needing to crack or know the actual plaintext password. This works because many authentication protocols (like NTLM) use the password hash rather than the password itself for verification. It highlights why credential storage and session management security are critical.",
  },
  {
    id: "d10",
    imageUrl: "/diagrams/lec4-64.png",
    attackName: "Typosquatting",
    acceptableNames: ["typosquatting", "typo squatting", "url hijacking"],
    prevention:
      "Register common misspellings of domain names, use bookmarks, verify URLs carefully",
    acceptablePreventions: [
      "register",
      "bookmark",
      "verify url",
      "check url",
      "domain registration",
    ],
    explanation:
      "Typosquatting (also called URL hijacking) is a social engineering attack where an attacker registers domain names that are common misspellings or visual look-alikes of popular websites. When users accidentally mistype a URL, they are directed to the attacker's site which may look identical to the legitimate one. These fake sites are used to steal credentials, distribute malware, or generate ad revenue from the misdirected traffic.",
  },
  {
    id: "d11",
    imageUrl: "/diagrams/lec2-02.png",
    attackName: "Eavesdropping",
    acceptableNames: [
      "eavesdropping",
      "sniffing",
      "packet sniffing",
      "network eavesdropping",
    ],
    prevention:
      "Use encryption for data in transit, implement VPN, use secure protocols",
    acceptablePreventions: [
      "encryption",
      "vpn",
      "secure protocol",
      "encrypted",
      "tls",
      "https",
    ],
    explanation:
      "Eavesdropping (also known as sniffing) is a passive attack where an attacker secretly monitors network communications to capture sensitive data such as passwords, credit card numbers, or confidential messages. Unlike active attacks, eavesdropping does not alter the data in transit, making it harder to detect. It targets the confidentiality aspect of the CIA triad and is particularly effective on unencrypted or poorly secured network segments.",
  },
  {
    id: "d12",
    imageUrl: "/diagrams/lec2-05.png",
    attackName: "Impersonation/Masquerading",
    acceptableNames: [
      "impersonation",
      "masquerading",
      "masquerade",
      "identity theft",
    ],
    prevention:
      "Implement strong authentication, use multi-factor authentication, verify identities",
    acceptablePreventions: [
      "authentication",
      "mfa",
      "multi-factor",
      "verify identity",
      "two-factor",
    ],
    explanation:
      "Impersonation (or masquerading) is an attack in which an adversary assumes the identity of a legitimate user, system, or entity to gain unauthorized access to resources. This can occur at the network level (IP or MAC spoofing), application level (stolen credentials), or social level (pretending to be IT support). Strong multi-factor authentication is the primary defense because it requires proof of identity beyond just something you know.",
  },
];
