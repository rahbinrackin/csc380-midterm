import type { ShortResponseQuestion } from "../types";

export const shortResponseQuestions: ShortResponseQuestion[] = [
  // ── Group 1: Exam Questions (confirmed by classmate) ──
  {
    id: "sr-exam-1",
    question: "List the 5 goals of computer security.",
    modelAnswer:
      "1. Confidentiality — Preventing, detecting, or deterring the improper disclosure of information (includes privacy and secrecy).\n\n2. Integrity — Preventing, detecting, or deterring the improper modification of data.\n\n3. Availability — Preventing, detecting, or deterring the unauthorized denial of service or data to legitimate users.\n\n4. Authenticity — Ensuring that users of data/resources are the persons they claim to be.\n\n5. Accountability — Being able to trace a breach of security back to the responsible party (via audit logs/trails).",
    keyPoints: [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Authenticity",
      "Accountability",
    ],
    category: "SECURITY FUNDAMENTALS",
    source: "bank",
    group: "exam",
  },
  {
    id: "sr-exam-2",
    question: "List 2 causes of buffer overflow.",
    modelAnswer:
      "1. Careless programming practices — Programmers fail to perform bounds checking on input or use unsafe C library functions like gets() that do not limit the amount of data written to a buffer.\n\n2. Legacy buggy code in widely deployed systems — Older operating systems and applications contain buffer overflow vulnerabilities that were written before secure coding practices were standard, and they remain in use today.",
    keyPoints: [
      "Careless programming / no bounds checking",
      "Legacy buggy code in deployed systems",
    ],
    category: "BUFFER OVERFLOW",
    source: "bank",
    group: "exam",
  },
  {
    id: "sr-exam-3",
    question: "Describe what a buffer overflow is.",
    modelAnswer:
      "A buffer overflow (also called buffer overrun) is a condition at an interface under which more input can be placed into a buffer or data holding area than the capacity allocated, overwriting other information. It is a programming error that occurs when a process attempts to store data beyond the limits of a fixed-sized buffer. The buffer could be located on the stack, in the heap, or in the data section of the process.\n\nConsequences include:\n• Corruption of program data\n• Unexpected transfer of control\n• Memory access violations\n• Execution of code chosen by the attacker\n\nAttackers exploit this condition to crash a system or insert specially crafted code (shellcode) that allows them to gain control of the system.",
    keyPoints: [
      "More input than buffer capacity",
      "Overwrites adjacent memory",
      "Can be on stack, heap, or data section",
      "Leads to code execution or crash",
      "NIST definition: condition at an interface",
    ],
    category: "BUFFER OVERFLOW",
    source: "bank",
    group: "exam",
  },
  {
    id: "sr-exam-4",
    question: "List and explain the buffer overflow defenses.",
    modelAnswer:
      "Buffer overflow defenses fall into two broad categories:\n\nCOMPILE-TIME DEFENSES (harden new programs to resist attacks):\n\n1. Programming Language — Use modern high-level languages (e.g., Java, Python) that enforce range checks and are not vulnerable to buffer overflows. Trade-off: additional runtime overhead.\n\n2. Safe Coding Techniques — Programmers inspect code and rewrite unsafe patterns. Example: the OpenBSD project audited its entire code base.\n\n3. Language Extensions / Safe Libraries — Replace unsafe C library functions with safer variants (e.g., Libsafe replaces gets() with bounded alternatives).\n\n4. Stack Protection (Stack Canary) — Add function entry and exit code that places a random canary value between the buffer and the return address. If the canary is modified, a buffer overflow is detected and the program is terminated. Examples: StackShield, Return Address Defender (RAD).\n\nRUN-TIME DEFENSES (detect and abort attacks in existing programs):\n\n1. Executable Address Space Protection (DEP/NX) — Mark memory regions (like the stack) as non-executable so injected shellcode cannot run. Requires MMU support.\n\n2. Address Space Layout Randomization (ASLR) — Randomize the locations of the stack, heap, global data, and libraries for each process, making it very difficult for attackers to predict target addresses.\n\n3. Guard Pages — Place unmapped pages between critical memory regions. Any access to a guard page triggers a hardware fault and aborts the process.",
    keyPoints: [
      "Two categories: compile-time and run-time",
      "Compile-time: safe language, safe coding, safe libraries, stack canary",
      "Run-time: DEP/NX, ASLR, guard pages",
      "Stack canary uses random value to detect corruption",
      "ASLR randomizes memory layout",
    ],
    category: "BUFFER OVERFLOW",
    source: "bank",
    group: "exam",
  },

  // ── Group 2: Extra Practice (Q20-29 from question bank) ──
  {
    id: "sr-extra-20",
    question: "Describe the 3 forms of insider threat.",
    modelAnswer:
      "1. Malicious Insider — A current or former employee who intentionally misuses their authorized access to harm the organization (e.g., stealing data, sabotaging systems, planting logic bombs).\n\n2. Negligent Insider — An employee who unintentionally causes security incidents through carelessness, such as clicking phishing links, using weak passwords, or improperly disposing of sensitive documents.\n\n3. Compromised Insider — An employee whose credentials or system access has been taken over by an external attacker without the employee's knowledge (e.g., through phishing or malware), allowing the attacker to act as an insider.",
    keyPoints: [
      "Malicious — intentional harm",
      "Negligent — careless mistakes",
      "Compromised — credentials stolen by external attacker",
    ],
    category: "THREAT ACTORS",
    source: "bank",
    group: "extra",
  },
  {
    id: "sr-extra-21",
    question: "What do you understand by the Cyber Security CIA?",
    modelAnswer:
      "The CIA Triad is the foundational model for information security:\n\n• Confidentiality — Preventing the improper disclosure of information. Includes privacy (protecting personal data) and secrecy (protecting organizational data).\n\n• Integrity — Preventing the improper modification of data, whether intentional or accidental. Examples: corruption of a hard drive, changing course grades, fraudulent money transfers.\n\n• Availability — Ensuring that services and data are accessible when needed and without undue delay. Threats include Denial of Service (DoS) and Distributed Denial of Service (DDoS) attacks.",
    keyPoints: [
      "Confidentiality — prevent disclosure",
      "Integrity — prevent modification",
      "Availability — ensure access",
    ],
    category: "SECURITY FUNDAMENTALS",
    source: "bank",
    group: "extra",
  },
  {
    id: "sr-extra-22",
    question: "What do you understand by Malware?",
    modelAnswer:
      "Malware is software that enters a computer system without the user's knowledge or consent and then performs an unwanted and harmful action. It is the general term for a wide variety of damaging software programs. Malware is continually evolving to avoid detection by improved security measures.\n\nMalware can be classified by its primary action:\n• Imprison — Takes away user freedom (ransomware, cryptomalware)\n• Launch — Infects a computer to launch attacks on others (virus, worm, bot)\n• Snoop — Spies on victims (spyware, keylogger)\n• Deceive — Hides true intentions (PUP, Trojan, RAT)\n• Evade — Helps attacks evade detection (backdoor, logic bomb, rootkit)",
    keyPoints: [
      "Software that enters without consent",
      "Performs unwanted harmful action",
      "Categories: Imprison, Launch, Snoop, Deceive, Evade",
    ],
    category: "MALWARE",
    source: "bank",
    group: "extra",
  },
  {
    id: "sr-extra-23",
    question:
      "Briefly describe each of these malware classifications and give two examples of attacks that fall under each:\na. Imprison\nb. Launch\nc. Snoop\nd. Deceive\ne. Evade",
    modelAnswer:
      "a. Imprison — Takes away the freedom of the user to do what they want with their system.\n   Examples: Ransomware (locks device until fee is paid), Cryptomalware (encrypts all files and demands payment for the key)\n\nb. Launch — Malware that infects a computer to launch attacks on other computers.\n   Examples: Virus (file-based or fileless, self-replicates on the same computer), Worm (uses networks to replicate to other computers)\n\nc. Snoop — Malware that secretly monitors and collects information from victims.\n   Examples: Spyware (tracks user activity and sends data back to attacker), Keylogger (captures every keystroke)\n\nd. Deceive — Malware that attempts to deceive the user and hide its true intentions.\n   Examples: Trojan (executable disguised as benign software), PUP/Potentially Unwanted Program (unwanted software like adware)\n\ne. Evade — Malware that helps attacks evade detection by security tools.\n   Examples: Rootkit (hides its presence and other malware by accessing lower OS layers), Logic Bomb (dormant code that triggers on a specific condition)",
    keyPoints: [
      "Imprison: Ransomware, Cryptomalware",
      "Launch: Virus, Worm",
      "Snoop: Spyware, Keylogger",
      "Deceive: Trojan, PUP",
      "Evade: Rootkit, Logic Bomb",
    ],
    category: "MALWARE",
    source: "bank",
    group: "extra",
  },
  {
    id: "sr-extra-24",
    question: "Differentiate between Virus and Worm.",
    modelAnswer:
      "Virus:\n• Malicious code attached to a file that reproduces itself on the SAME computer\n• Requires human action to spread (e.g., opening a file, running a program)\n• Can be file-based (attaches to files) or fileless (operates in memory using trusted system tools like PowerShell)\n• Unloads a payload then replicates by inserting code into another file on the same machine\n\nWorm:\n• Malicious program that uses a COMPUTER NETWORK to replicate to OTHER computers\n• Does NOT require human action — exploits vulnerabilities in applications or operating systems automatically\n• Can leave behind payloads on infected systems (deleting files, enabling remote control)\n• Sometimes called a \"network virus\"\n\nKey difference: A virus replicates locally on the same machine and needs human action, while a worm replicates across networks autonomously.",
    keyPoints: [
      "Virus: replicates on same computer, needs human action",
      "Worm: replicates across network, autonomous",
      "Virus attaches to files; worm exploits network vulnerabilities",
    ],
    category: "MALWARE",
    source: "bank",
    group: "extra",
  },
  {
    id: "sr-extra-25",
    question: "List and explain 5 ways that malware can spread.",
    modelAnswer:
      "1. Vulnerabilities — Malware exploits security flaws in software or operating systems to gain unauthorized access and install itself.\n\n2. Backdoors — Previously installed backdoors provide a hidden entry point that malware can use to enter a system, bypassing normal security controls.\n\n3. Drive-by Downloads — Malware is automatically downloaded and installed when a user visits a compromised or malicious website, often without any user interaction.\n\n4. Privilege Escalation — Malware gains higher-level access (e.g., admin/root) than initially obtained, allowing it to spread further within the system or network.\n\n5. Homogeneity — When many systems run the same software and configurations, a single vulnerability can be exploited to spread malware across all of them simultaneously.\n\n(Also: Internet Connectivity enables rapid global spread; Blended Threats combine multiple methods.)",
    keyPoints: [
      "Vulnerabilities",
      "Backdoors",
      "Drive-by downloads",
      "Privilege Escalation",
      "Homogeneity / Internet Connectivity / Blended threats",
    ],
    category: "MALWARE",
    source: "bank",
    group: "extra",
  },
  {
    id: "sr-extra-26",
    question:
      "Briefly describe the following application attacks:\na. Cross-Site Scripting (XSS)\nb. Cross-Site Request Forgery (CSRF)\nc. Replay attack",
    modelAnswer:
      "a. Cross-Site Scripting (XSS):\nA website that accepts user input without validating it uses that input in a response. An attacker takes advantage by tricking a valid website into feeding a malicious script to another user's web browser. The script executes in the victim's browser context with the website's permissions.\n\nb. Cross-Site Request Forgery (CSRF):\nCSRF takes advantage of an authentication token that a website sends to a user's browser. If a user is currently authenticated and is tricked into loading another webpage, the new page inherits the victim's identity and privileges, performing undesired actions on the attacker's behalf.\n\nc. Replay Attack:\nAfter intercepting and copying data, the threat actor retransmits selected and edited portions of the copied communications later to impersonate the legitimate user. Commonly used against digital identities and authentication servers.",
    keyPoints: [
      "XSS: inject malicious script via unvalidated input",
      "CSRF: exploit authentication tokens to act as the user",
      "Replay: capture and retransmit data to impersonate user",
    ],
    category: "APPLICATION ATTACKS",
    source: "bank",
    group: "extra",
  },
  {
    id: "sr-extra-27",
    question: "What are the risks of using AI and ML in Cybersecurity?",
    modelAnswer:
      "The risks associated with using AI and ML in cybersecurity are called adversarial artificial intelligence:\n\n1. Security of ML Algorithms — The ML algorithms themselves could be attacked and compromised, allowing threat actors to alter algorithms to ignore attacks or produce incorrect results.\n\n2. Tainted Training Data — Attackers can attempt to alter the training data used by ML in order to produce false negatives (failing to detect attacks), effectively cloaking themselves from AI-based detection systems.\n\nThese risks mean that while AI/ML can enhance threat detection and response speed, the systems themselves can become attack targets.",
    keyPoints: [
      "Adversarial AI",
      "ML algorithms can be attacked/compromised",
      "Tainted training data produces false negatives",
    ],
    category: "AI SECURITY",
    source: "bank",
    group: "extra",
  },
  {
    id: "sr-extra-28",
    question: "What do you understand by Social Engineering?",
    modelAnswer:
      "Social engineering is a means of eliciting information by relying on the weaknesses of individuals rather than technical vulnerabilities. It involves any attack that uses human interaction and psychological manipulation to trick people into breaking security procedures or divulging confidential information.\n\nAttackers use techniques such as:\n• Providing a reason for the request\n• Projecting confidence\n• Using evasion and diversion\n• Making the victim laugh to build rapport\n\nPsychological principles exploited include: Authority, Intimidation, Consensus, Scarcity, Familiarity, Trust, and Urgency.\n\nSocial engineering is also used in influence campaigns on social media to sway attention and sympathy in a particular direction.",
    keyPoints: [
      "Relies on human weaknesses, not technical flaws",
      "Psychological manipulation",
      "Principles: Authority, Intimidation, Consensus, Scarcity, Familiarity, Trust, Urgency",
    ],
    category: "SOCIAL ENGINEERING",
    source: "bank",
    group: "extra",
  },
];
