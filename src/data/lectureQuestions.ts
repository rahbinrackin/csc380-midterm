import type { MCQuestion } from "../types";

export const lectureQuestions: MCQuestion[] = [
  {
    id: "lec-1",
    question:
      "Which security goal focuses on preventing the improper disclosure of information?",
    choices: [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Authenticity",
    ],
    correctAnswer: 0,
    explanation:
      "Confidentiality ensures that information is not disclosed to unauthorized individuals, processes, or devices. It is one of the three pillars of the CIA triad and is enforced through mechanisms like encryption, access controls, and data classification.",
    wrongExplanations: {
      1: "Integrity focuses on preventing unauthorized modification of data, not its disclosure. While related, integrity ensures data remains accurate and unaltered rather than hidden from unauthorized viewers.",
      2: "Availability ensures that systems and data are accessible to authorized users when needed. It deals with uptime and access, not with preventing disclosure of sensitive information.",
      3: "Authenticity ensures that users or data sources are genuinely who or what they claim to be. While it supports confidentiality by verifying identities, it is not directly about preventing information disclosure.",
    },
    category: "CIA TRIAD",
    source: "lecture",
    lectureRef: "Lecture 1 - Introduction",
  },
  {
    id: "lec-2",
    question:
      "Which security goal involves preventing the unauthorized modification of data?",
    choices: [
      "Availability",
      "Integrity",
      "Confidentiality",
      "Accountability",
    ],
    correctAnswer: 1,
    explanation:
      "Integrity ensures that data has not been altered in an unauthorized manner. It guarantees that information remains accurate, complete, and trustworthy throughout its lifecycle. Techniques like hashing, digital signatures, and checksums are used to verify data integrity.",
    wrongExplanations: {
      0: "Availability is about ensuring systems and data are accessible when needed by authorized users. It does not address whether data has been tampered with or modified.",
      2: "Confidentiality protects data from unauthorized disclosure or access, not from unauthorized changes. Data can be confidential (hidden) but still lack integrity if it has been altered.",
      3: "Accountability ensures that actions can be traced back to a responsible entity. While it helps detect unauthorized modifications after the fact, it does not directly prevent them.",
    },
    category: "CIA TRIAD",
    source: "lecture",
    lectureRef: "Lecture 1 - Introduction",
  },
  {
    id: "lec-3",
    question:
      "A Distributed Denial of Service (DDoS) attack primarily targets which security goal?",
    choices: [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Authenticity",
    ],
    correctAnswer: 2,
    explanation:
      "DDoS attacks flood a target system with overwhelming traffic, making it unavailable to legitimate users. This directly targets the Availability pillar of the CIA triad. The goal is not to steal or modify data, but to disrupt service access.",
    wrongExplanations: {
      0: "Confidentiality involves keeping data secret from unauthorized users. A DDoS attack does not aim to access or disclose sensitive information—it aims to make services unreachable.",
      1: "Integrity involves keeping data accurate and unmodified. DDoS attacks do not alter data; they overwhelm systems to prevent legitimate users from accessing services.",
      3: "Authenticity verifies the identity of users or data sources. DDoS attacks do not attempt to impersonate anyone—they simply consume resources to deny access to others.",
    },
    category: "CIA TRIAD",
    source: "lecture",
    lectureRef: "Lecture 1 - Introduction",
  },
  {
    id: "lec-4",
    question: "What are the three aspects of security?",
    choices: [
      "Prevention, Detection, Reaction",
      "Confidentiality, Integrity, Availability",
      "Authentication, Authorization, Accounting",
      "Encryption, Hashing, Signing",
    ],
    correctAnswer: 0,
    explanation:
      "The three aspects of security are Prevention (stopping attacks before they occur), Detection (identifying attacks in progress or after they happen), and Reaction (responding to and recovering from attacks). These represent the operational lifecycle of security management.",
    wrongExplanations: {
      1: "Confidentiality, Integrity, and Availability form the CIA triad, which describes the three goals of information security—not the three aspects. The aspects (Prevention, Detection, Reaction) describe how we achieve those goals.",
      2: "Authentication, Authorization, and Accounting (AAA) is a framework for controlling access to resources. While important to security, it represents an access control model, not the three fundamental aspects of security.",
      3: "Encryption, Hashing, and Signing are cryptographic techniques used to implement security. They are tools and mechanisms, not the overarching aspects of security itself.",
    },
    category: "SECURITY CONCEPTS",
    source: "lecture",
    lectureRef: "Lecture 1 - Introduction",
  },
  {
    id: "lec-5",
    question:
      "Increasing security typically has what effect on functionality and ease-of-use?",
    choices: [
      "It improves both functionality and ease-of-use",
      "It hampers both functionality and ease-of-use",
      "It improves functionality but reduces ease-of-use",
      "It has no effect on either",
    ],
    correctAnswer: 1,
    explanation:
      "There is an inherent trade-off between security and usability. Adding more security controls (multi-factor authentication, strict access policies, encryption overhead) typically makes systems harder to use and may limit functionality. Security professionals must balance protection with user experience to avoid users circumventing controls out of frustration.",
    wrongExplanations: {
      0: "In practice, stronger security measures often add friction for users. Additional authentication steps, restricted permissions, and encryption overhead make systems less convenient, not more functional or easier to use.",
      2: "Increasing security generally hampers both, not just ease-of-use. Security restrictions can limit what features are available (functionality) while also making the remaining features harder to access (ease-of-use).",
      3: "Security measures inherently add constraints to a system. Firewalls block traffic, encryption adds processing time, and access controls restrict actions—all of which affect functionality and user experience.",
    },
    category: "SECURITY CONCEPTS",
    source: "lecture",
    lectureRef: "Lecture 1 - Introduction",
  },
  {
    id: "lec-6",
    question:
      "Which security goal ensures that users of data or resources are the persons they claim to be?",
    choices: [
      "Confidentiality",
      "Integrity",
      "Authenticity",
      "Availability",
    ],
    correctAnswer: 2,
    explanation:
      "Authenticity (or Authentication) is the security property that verifies the identity of users, devices, or data sources. It ensures that entities are genuinely who they claim to be, typically through credentials like passwords, biometrics, certificates, or multi-factor authentication.",
    wrongExplanations: {
      0: "Confidentiality protects information from being disclosed to unauthorized parties. While authentication helps enforce confidentiality, the goal of confidentiality itself is about secrecy, not identity verification.",
      1: "Integrity ensures that data has not been altered in unauthorized ways. It focuses on the accuracy and completeness of data, not on verifying the identity of users accessing that data.",
      3: "Availability ensures that resources are accessible when needed. It is concerned with uptime and access, not with verifying whether a user is who they claim to be.",
    },
    category: "SECURITY CONCEPTS",
    source: "lecture",
    lectureRef: "Lecture 1 - Introduction",
  },
  {
    id: "lec-7",
    question:
      "Which security goal ensures a breach of security can be traced back to the responsible party?",
    choices: [
      "Authenticity",
      "Availability",
      "Confidentiality",
      "Accountability",
    ],
    correctAnswer: 3,
    explanation:
      "Accountability ensures that actions taken on a system can be traced back to a specific entity. This is achieved through audit logs, monitoring, and non-repudiation mechanisms. It serves as a deterrent because users know their actions are recorded and traceable.",
    wrongExplanations: {
      0: "Authenticity verifies that users are who they claim to be. While authentication supports accountability (you need to know who someone is before tracking their actions), authenticity alone does not ensure actions can be traced after the fact.",
      1: "Availability ensures systems remain operational and accessible. It has nothing to do with tracking actions or attributing security breaches to specific individuals.",
      2: "Confidentiality prevents unauthorized disclosure of information. It protects data secrecy but does not provide the ability to trace security breaches back to responsible parties.",
    },
    category: "SECURITY CONCEPTS",
    source: "lecture",
    lectureRef: "Lecture 1 - Introduction",
  },
  {
    id: "lec-8",
    question:
      "Which of the following C functions is NOT considered unsafe for buffer overflow vulnerabilities?",
    choices: ["gets()", "sprintf()", "fgets()", "strcpy()"],
    correctAnswer: 2,
    explanation:
      "fgets() is considered safe because it requires a size parameter that limits the number of characters read, preventing buffer overflows. Unlike gets(), which reads input without any bounds checking, fgets() will stop reading after (size-1) characters or at a newline, whichever comes first.",
    wrongExplanations: {
      0: "gets() is one of the most dangerous C functions and has been removed from the C11 standard. It reads input from stdin with no size limit, making buffer overflow trivial. It should never be used.",
      1: "sprintf() is unsafe because it writes formatted output to a buffer without checking the buffer's size. If the formatted string exceeds the buffer, it overflows. The safe alternative is snprintf(), which accepts a maximum size parameter.",
      3: "strcpy() copies a string from source to destination without checking whether the destination buffer is large enough. If the source string is longer than the destination buffer, a buffer overflow occurs. The safer alternative is strncpy().",
    },
    category: "BUFFER OVERFLOW",
    source: "lecture",
    lectureRef: "Lecture 3A - Buffer Overflow",
  },
  {
    id: "lec-9",
    question:
      "What is the term for code supplied by an attacker that is often saved in the buffer being overflowed and traditionally transferred control to a shell?",
    choices: ["Payload", "Shellcode", "Exploit kit", "Rootkit"],
    correctAnswer: 1,
    explanation:
      "Shellcode is the specialized machine code that an attacker injects into a vulnerable buffer. It is called 'shellcode' because its original and most common purpose was to spawn an interactive command shell (like /bin/sh on Unix), giving the attacker direct control of the system.",
    wrongExplanations: {
      0: "A payload is a general term for the data carried by a network packet or the malicious component of an exploit. While shellcode is a type of payload, the specific term for code injected via buffer overflow that spawns a shell is 'shellcode.'",
      2: "An exploit kit is a collection of pre-written exploits packaged together for ease of use, often targeting web browser vulnerabilities. It is not the term for the injected code in a buffer overflow attack.",
      3: "A rootkit is malware designed to hide its presence and maintain persistent privileged access to a system. It is fundamentally different from shellcode, which is the injected code that exploits a buffer overflow vulnerability.",
    },
    category: "BUFFER OVERFLOW",
    source: "lecture",
    lectureRef: "Lecture 3A - Buffer Overflow",
  },
  {
    id: "lec-10",
    question:
      "Which project provides tools that automate the process of creating shellcode for penetration testing?",
    choices: [
      "OpenBSD Project",
      "Metasploit Project",
      "Wireshark Project",
      "Nmap Project",
    ],
    correctAnswer: 1,
    explanation:
      "The Metasploit Project is a widely used open-source penetration testing framework that includes tools for generating shellcode, developing exploits, and testing system vulnerabilities. Its msfvenom tool can generate shellcode for various platforms and encoding schemes.",
    wrongExplanations: {
      0: "The OpenBSD Project focuses on creating a secure, free Unix-like operating system. While it emphasizes security in its design, it does not provide tools for creating shellcode or automated exploitation.",
      2: "Wireshark is a network protocol analyzer (packet sniffer) used for network troubleshooting and analysis. It captures and inspects network traffic but does not generate shellcode or automate exploit creation.",
      3: "Nmap (Network Mapper) is a network scanning and discovery tool used to find hosts and services on a network. While valuable for reconnaissance, it does not automate shellcode generation like Metasploit does.",
    },
    category: "BUFFER OVERFLOW",
    source: "lecture",
    lectureRef: "Lecture 3A - Buffer Overflow",
  },
  {
    id: "lec-11",
    question:
      "In x86 architecture, which register contains the address of the next instruction to be executed?",
    choices: ["%eax", "%esp", "%eip", "%ebp"],
    correctAnswer: 2,
    explanation:
      "%eip (Extended Instruction Pointer) holds the memory address of the next instruction the CPU will execute. In buffer overflow attacks, overwriting %eip allows an attacker to redirect program execution to their injected shellcode, which is why controlling %eip is the primary objective of stack-based buffer overflows.",
    wrongExplanations: {
      0: "%eax (Extended Accumulator) is a general-purpose register used for arithmetic operations, function return values, and data manipulation. It does not hold the address of the next instruction to execute.",
      1: "%esp (Extended Stack Pointer) points to the top of the current stack frame. It tracks where the stack is in memory but does not determine which instruction executes next.",
      3: "%ebp (Extended Base Pointer) points to the base of the current stack frame and is used as a reference point for accessing function parameters and local variables. It is not the instruction pointer.",
    },
    category: "BUFFER OVERFLOW",
    source: "lecture",
    lectureRef: "Lecture 3A - Buffer Overflow",
  },
  {
    id: "lec-12",
    question:
      "What compile-time defense involves writing a copy of the return address to a safe region of memory and checking it on function exit?",
    choices: [
      "ASLR",
      "Stackshield / Return Address Defender (RAD)",
      "Guard pages",
      "Non-executable stack",
    ],
    correctAnswer: 1,
    explanation:
      "Stackshield (also known as Return Address Defender or RAD) is a compile-time defense that copies the return address to a protected memory region (a 'return address stack') when a function is entered. On function exit, it compares the stored copy with the return address on the stack. If they differ, the program detects a buffer overflow attempt and can terminate safely.",
    wrongExplanations: {
      0: "ASLR (Address Space Layout Randomization) is a run-time defense that randomizes the memory layout of a process, making it harder for attackers to predict where their shellcode or gadgets will be in memory. It does not copy and verify return addresses.",
      2: "Guard pages are special memory pages placed between critical regions (like the stack and heap) that trigger an exception if accessed. They detect out-of-bounds access but do not specifically copy or verify return addresses.",
      3: "Non-executable stack (NX bit / DEP) marks the stack memory as non-executable, preventing injected shellcode from running. It does not involve copying return addresses—it simply prevents code execution from stack memory.",
    },
    category: "BUFFER OVERFLOW",
    source: "lecture",
    lectureRef: "Lecture 3A - Buffer Overflow",
  },
  {
    id: "lec-13",
    question:
      "A heap overflow differs from a stack overflow in that heap overflows:",
    choices: [
      "Always contain a return address to overwrite",
      "May target function pointers rather than return addresses",
      "Can only occur in interpreted languages",
      "Are prevented by ASLR",
    ],
    correctAnswer: 1,
    explanation:
      "Heap overflows target dynamically allocated memory (the heap) rather than the call stack. Since the heap does not contain return addresses, attackers instead target function pointers, object vtables, or heap metadata structures stored on the heap. This makes heap overflows harder to exploit but also harder to defend against with stack-specific protections like canaries.",
    wrongExplanations: {
      0: "This is the opposite of the truth. Stack overflows target return addresses because they are stored on the stack. Heap memory does not contain return addresses, so heap overflows must find other targets like function pointers.",
      2: "Heap overflows can occur in any language that allows direct memory manipulation, particularly C and C++. They are not limited to interpreted languages; in fact, most interpreted languages have built-in bounds checking that prevents such overflows.",
      3: "ASLR makes exploitation harder by randomizing memory layout, but it does not prevent heap overflows from occurring. The overflow itself still happens—ASLR just makes it harder for the attacker to predict where useful targets are in memory.",
    },
    category: "BUFFER OVERFLOW",
    source: "lecture",
    lectureRef: "Lecture 3A - Buffer Overflow",
  },
  {
    id: "lec-14",
    question:
      "Which defense places illegal-address pages between critical regions of memory so any access attempt aborts the process?",
    choices: ["Stack canaries", "ASLR", "Guard pages", "Libsafe"],
    correctAnswer: 2,
    explanation:
      "Guard pages are special memory pages marked with no-access permissions placed between critical memory regions (such as between the stack and heap, or between thread stacks). If a buffer overflow causes a write or read that crosses into a guard page, the hardware triggers an access violation and the process is terminated, preventing further exploitation.",
    wrongExplanations: {
      0: "Stack canaries are special sentinel values placed between local variables and the saved return address on the stack. They detect overwrites by checking if the canary value has changed, but they do not use illegal-address pages between memory regions.",
      1: "ASLR randomizes the base addresses of memory regions (stack, heap, libraries) to make it harder for attackers to predict memory layouts. It does not place guard pages between memory regions.",
      3: "Libsafe is a library that intercepts calls to vulnerable C functions (like strcpy, sprintf) and replaces them with bounds-checked versions. It operates at the function call level, not by placing guard pages in memory.",
    },
    category: "BUFFER OVERFLOW",
    source: "lecture",
    lectureRef: "Lecture 3A - Buffer Overflow",
  },
  {
    id: "lec-15",
    question:
      "Under the malware classification system, ransomware and cryptomalware fall under which primary action category?",
    choices: ["Launch", "Snoop", "Imprison", "Evade"],
    correctAnswer: 2,
    explanation:
      "Ransomware and cryptomalware fall under the 'Imprison' category because their primary action is to lock users out of their own data or systems. Ransomware prevents device functionality until a fee is paid, while cryptomalware encrypts files so they cannot be opened without a decryption key held by the attacker.",
    wrongExplanations: {
      0: "The 'Launch' category includes malware that propagates and spreads, such as viruses, worms, and bots. Ransomware does not primarily spread—it imprisons the victim's data or system.",
      1: "The 'Snoop' category includes malware designed to monitor and steal information, such as spyware and keyloggers. Ransomware does not spy on users—it locks their data and demands payment.",
      3: "The 'Evade' category includes malware designed to maintain persistent hidden access, such as backdoors, rootkits, and logic bombs. While ransomware may use evasion techniques, its primary action is imprisonment, not evasion.",
    },
    category: "MALWARE",
    source: "lecture",
    lectureRef: "Lecture 4 - Malware and Attacks",
  },
  {
    id: "lec-16",
    question:
      "Which malware classification category includes viruses, worms, and bots?",
    choices: ["Imprison", "Launch", "Deceive", "Evade"],
    correctAnswer: 1,
    explanation:
      "Viruses, worms, and bots fall under the 'Launch' category because they are primarily designed to propagate and spread. Viruses attach to files, worms self-replicate across networks, and bots form botnets—all focused on launching and spreading malicious activity.",
    wrongExplanations: {
      0: "The 'Imprison' category is for malware that locks users out of their data, like ransomware and cryptomalware. Viruses, worms, and bots are not primarily about imprisoning data.",
      2: "The 'Deceive' category includes malware that tricks users, such as Trojans and RATs (Remote Access Trojans). While viruses may use deception to spread, their primary classification is under 'Launch' for propagation.",
      3: "The 'Evade' category includes malware focused on maintaining hidden persistent access, like backdoors and rootkits. Viruses, worms, and bots are classified under 'Launch' for their spreading behavior.",
    },
    category: "MALWARE",
    source: "lecture",
    lectureRef: "Lecture 4 - Malware and Attacks",
  },
  {
    id: "lec-17",
    question:
      "Spyware and keyloggers fall under which malware classification category?",
    choices: ["Imprison", "Launch", "Snoop", "Deceive"],
    correctAnswer: 2,
    explanation:
      "Spyware and keyloggers are classified under 'Snoop' because their primary purpose is to secretly monitor user activity and collect information. Spyware tracks browsing habits and system usage, while keyloggers record every keystroke to capture passwords, messages, and other sensitive input.",
    wrongExplanations: {
      0: "The 'Imprison' category is for ransomware and cryptomalware that lock users out of their data. Spyware and keyloggers do not lock data—they silently observe and steal it.",
      1: "The 'Launch' category covers malware that spreads and propagates like viruses and worms. Spyware and keyloggers are not primarily about spreading—they are about covert surveillance.",
      3: "The 'Deceive' category includes Trojans and RATs that trick users into installing them by appearing legitimate. While spyware may be distributed through deceptive means, its primary action is snooping, not deceiving.",
    },
    category: "MALWARE",
    source: "lecture",
    lectureRef: "Lecture 4 - Malware and Attacks",
  },
  {
    id: "lec-18",
    question:
      "Trojans and RATs fall under which malware classification category?",
    choices: ["Snoop", "Deceive", "Evade", "Launch"],
    correctAnswer: 1,
    explanation:
      "Trojans and RATs (Remote Access Trojans) fall under the 'Deceive' category because they disguise themselves as legitimate software to trick users into installing them. Like the mythological Trojan Horse, they appear benign but contain hidden malicious functionality that gives attackers unauthorized access.",
    wrongExplanations: {
      0: "The 'Snoop' category is for surveillance malware like spyware and keyloggers. While RATs can be used for spying, their primary classification is 'Deceive' because deception (masquerading as legitimate software) is their defining characteristic.",
      2: "The 'Evade' category includes malware focused on hiding and maintaining access, like backdoors and rootkits. Trojans are classified under 'Deceive' because their core mechanism is tricking users, not evading detection.",
      3: "The 'Launch' category is for malware that propagates, like viruses and worms. Trojans do not self-replicate—they rely on social engineering to trick users into voluntarily installing them.",
    },
    category: "MALWARE",
    source: "lecture",
    lectureRef: "Lecture 4 - Malware and Attacks",
  },
  {
    id: "lec-19",
    question:
      "Backdoors, logic bombs, and rootkits fall under which malware classification category?",
    choices: ["Deceive", "Snoop", "Launch", "Evade"],
    correctAnswer: 3,
    explanation:
      "Backdoors, logic bombs, and rootkits fall under the 'Evade' category because they are designed to maintain persistent, hidden access to a compromised system. Backdoors provide secret entry points, logic bombs activate under specific conditions, and rootkits hide the presence of malware—all focused on evading detection and maintaining access.",
    wrongExplanations: {
      0: "The 'Deceive' category is for malware like Trojans that trick users into installation. While rootkits use deception to hide, their primary purpose is evasion—maintaining hidden persistent access rather than initial trickery.",
      1: "The 'Snoop' category covers surveillance malware like spyware and keyloggers. Backdoors and rootkits can enable snooping, but their primary classification is 'Evade' because their core function is hiding and maintaining access.",
      2: "The 'Launch' category is for malware that spreads, like viruses and worms. Backdoors, logic bombs, and rootkits do not self-propagate—they focus on maintaining hidden access within already-compromised systems.",
    },
    category: "MALWARE",
    source: "lecture",
    lectureRef: "Lecture 4 - Malware and Attacks",
  },
  {
    id: "lec-20",
    question:
      "In a Cross-Site Request Forgery (CSRF) attack, what does the attacker take advantage of?",
    choices: [
      "A buffer overflow vulnerability",
      "An authentication token that a website sends to a user's browser",
      "An unpatched operating system",
      "A weak encryption algorithm",
    ],
    correctAnswer: 1,
    explanation:
      "CSRF exploits the trust that a website has in a user's browser. When a user is authenticated to a site, their browser automatically includes session cookies or authentication tokens with every request to that site. An attacker crafts a malicious request that the victim's browser sends unknowingly, and the server processes it as a legitimate authenticated request.",
    wrongExplanations: {
      0: "Buffer overflow vulnerabilities involve writing data beyond allocated memory boundaries, which is a completely different class of attack. CSRF does not involve memory corruption—it exploits web authentication mechanisms.",
      2: "Unpatched operating systems are vulnerable to various exploits, but CSRF specifically targets web application authentication. The OS patch level is irrelevant to CSRF; the vulnerability exists in how web applications handle authenticated sessions.",
      3: "Weak encryption algorithms can be exploited by cryptographic attacks, but CSRF does not involve breaking encryption. It exploits the automatic inclusion of authentication credentials in browser requests to trusted websites.",
    },
    category: "APPLICATION ATTACKS",
    source: "lecture",
    lectureRef: "Lecture 4 - Malware and Attacks",
  },
  {
    id: "lec-21",
    question:
      "What is the primary difference between CSRF and SSRF attacks?",
    choices: [
      "CSRF targets users while SSRF targets web servers",
      "CSRF uses SQL while SSRF uses JavaScript",
      "CSRF is a physical attack while SSRF is a network attack",
      "There is no difference",
    ],
    correctAnswer: 0,
    explanation:
      "CSRF (Cross-Site Request Forgery) tricks an authenticated user's browser into making unwanted requests to a trusted site. SSRF (Server-Side Request Forgery) tricks the server itself into making requests to internal or external resources on the attacker's behalf. The key distinction is the target: CSRF exploits the user's authenticated session, while SSRF exploits the server's ability to make network requests.",
    wrongExplanations: {
      1: "Neither CSRF nor SSRF is inherently tied to SQL or JavaScript. CSRF exploits browser authentication mechanisms, and SSRF exploits server-side request functionality. Both can work with various technologies.",
      2: "Both CSRF and SSRF are network-based attacks that exploit web application vulnerabilities. Neither involves physical access to hardware or facilities.",
      3: "CSRF and SSRF are fundamentally different attacks. CSRF exploits the trust a website has in a user's browser, while SSRF exploits the trust internal systems have in the web server. They target different components and require different defenses.",
    },
    category: "APPLICATION ATTACKS",
    source: "lecture",
    lectureRef: "Lecture 4 - Malware and Attacks",
  },
  {
    id: "lec-22",
    question:
      "Which of the following is a risk of using AI and ML in cybersecurity?",
    choices: [
      "Buffer overflows",
      "Improper input handling",
      "Device driver manipulation",
      "Tainted training data",
    ],
    correctAnswer: 3,
    explanation:
      "Tainted (or poisoned) training data is a significant risk when using AI/ML in cybersecurity. If an attacker can manipulate the data used to train a machine learning model, they can cause the model to make incorrect decisions—such as failing to detect malware or flagging legitimate traffic as malicious. This is known as a data poisoning attack.",
    wrongExplanations: {
      0: "Buffer overflows are memory corruption vulnerabilities in software, not a risk specific to AI/ML in cybersecurity. While AI software could theoretically have buffer overflows, this is not a unique risk of applying AI to security.",
      1: "Improper input handling is a general software vulnerability (leading to injection attacks, etc.), not a risk unique to AI/ML in cybersecurity. AI-specific risks involve the training process and model integrity.",
      2: "Device driver manipulation is an attack on operating system components, completely unrelated to the risks of using AI/ML for cybersecurity. It targets the OS kernel, not machine learning models.",
    },
    category: "AI SECURITY",
    source: "lecture",
    lectureRef: "Lecture 4 - Malware and Attacks",
  },
  {
    id: "lec-23",
    question:
      "Which of the following is NOT a way that malware spreads?",
    choices: [
      "Vulnerabilities",
      "Drive-by downloads",
      "Privilege escalation",
      "Strong passwords",
    ],
    correctAnswer: 3,
    explanation:
      "Strong passwords are a security defense mechanism, not a method of malware propagation. Malware spreads through vulnerabilities (unpatched software flaws), drive-by downloads (visiting compromised websites), privilege escalation (gaining higher access to spread further), and other vectors like phishing and removable media.",
    wrongExplanations: {
      0: "Software vulnerabilities (such as unpatched bugs and zero-day exploits) are a primary vector for malware propagation. Malware exploits these flaws to gain initial access or spread to new systems.",
      1: "Drive-by downloads occur when malware is automatically downloaded and installed simply by visiting a compromised or malicious website, often exploiting browser or plugin vulnerabilities. This is a common malware distribution method.",
      2: "Privilege escalation allows malware to gain higher-level permissions on a system, enabling it to spread to protected areas, install additional components, or propagate to other systems on the network.",
    },
    category: "MALWARE",
    source: "lecture",
    lectureRef: "Lecture 4 - Malware and Attacks",
  },
  {
    id: "lec-24",
    question:
      "Which social engineering principle involves creating a sense of limited time or resources to pressure the victim?",
    choices: ["Authority", "Familiarity", "Urgency/Scarcity", "Consensus"],
    correctAnswer: 2,
    explanation:
      "The Urgency/Scarcity principle pressures victims by creating a false sense that time is running out or resources are limited. Phishing emails often use this tactic with messages like 'Your account will be locked in 24 hours' or 'Only 2 spots remaining' to bypass rational decision-making and compel immediate action.",
    wrongExplanations: {
      0: "The Authority principle involves impersonating someone in a position of power (like a CEO or IT administrator) to compel compliance. It leverages respect for hierarchy, not time pressure or resource scarcity.",
      1: "The Familiarity (or Liking) principle exploits the human tendency to trust people we know or find likable. Attackers build rapport or impersonate known contacts, but this is about trust, not creating urgency.",
      3: "The Consensus (or Social Proof) principle leverages the tendency to follow what others are doing. Attackers might claim 'everyone in your department has already updated their password' to encourage compliance, but this is about peer behavior, not time pressure.",
    },
    category: "SOCIAL ENGINEERING",
    source: "lecture",
    lectureRef: "Lecture 4 - Malware and Attacks",
  },
  {
    id: "lec-25",
    question:
      "What advantage does a fileless virus have over a file-based virus?",
    choices: [
      "It is easier to remove",
      "It infects more files",
      "It is more difficult to detect because it operates only in memory",
      "It requires administrator privileges",
    ],
    correctAnswer: 2,
    explanation:
      "Fileless viruses operate entirely in memory (RAM) without writing malicious files to disk. This makes them extremely difficult to detect because traditional antivirus software primarily scans files on disk. Fileless malware often exploits trusted system tools like PowerShell or WMI to execute its payload, further evading detection by blending in with legitimate system activity.",
    wrongExplanations: {
      0: "Fileless viruses are actually harder to remove, not easier. Since they reside in memory and may use legitimate system tools, identifying and eliminating all components of the infection is more challenging than removing a file-based virus.",
      1: "Fileless viruses do not infect files at all—that is their defining characteristic. They operate in memory and exploit legitimate applications, avoiding file-system interaction entirely. File-based viruses are the ones that infect files.",
      3: "While some fileless attacks may leverage administrator privileges, this is not their inherent advantage. Their primary advantage is stealth through memory-only operation, which evades traditional file-scanning antivirus solutions regardless of privilege level.",
    },
    category: "MALWARE",
    source: "lecture",
    lectureRef: "Lecture 4 - Malware and Attacks",
  },
];
