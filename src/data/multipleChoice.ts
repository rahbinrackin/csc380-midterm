import type { MCQuestion } from "../types";

export const multipleChoiceQuestions: MCQuestion[] = [
  {
    id: "q1",
    question:
      "An employee stealing company data could be an example of which kind of threat actor?",
    choices: [
      "Non-persistent threat",
      "External threat",
      "Internal threat",
      "Persistent threat",
    ],
    correctAnswer: 2,
    explanation:
      "An internal threat (also called an insider threat) originates from within the organization. An employee who steals company data is a classic example because they already have authorized access to systems and data, making it easier to exfiltrate information.",
    wrongExplanations: {
      0: "A non-persistent threat refers to the duration or nature of an attack, not the origin. An employee with ongoing access is not described by this term.",
      1: "An external threat comes from outside the organization. Since the employee works within the company, this is not an external threat.",
      3: "A persistent threat (as in APT) refers to a prolonged, targeted attack campaign, typically by well-funded external groups. This does not describe the origin of the threat as internal.",
    },
    category: "THREAT ACTORS",
    source: "bank",
  },
  {
    id: "q2",
    question:
      "Which of the following is the BEST definition of the term hacker?",
    choices: [
      "The most organized, well-funded, and dangerous type of threat actor.",
      "Any individual whose attacks are politically motivated.",
      "A threat actor whose main goal is financial gain.",
      "A general term used to describe any individual who uses their technical knowledge to gain unauthorized access to an organization.",
      "A threat actor who lacks skills and sophistication but wants to impress their friends or garner attention.",
    ],
    correctAnswer: 3,
    explanation:
      "A hacker is a general, broad term for any individual who uses technical knowledge to gain unauthorized access to systems or organizations. It does not specify motivation, funding level, or skill level — it is an umbrella term.",
    wrongExplanations: {
      0: "This describes an Advanced Persistent Threat (APT) or nation-state actor, not the general definition of a hacker.",
      1: "This describes a hacktivist, who is a specific type of hacker motivated by political or social causes, not the general definition.",
      2: "This describes a cybercriminal or black hat hacker motivated by financial gain, which is only one subset of hackers.",
      4: "This describes a script kiddie, who is a specific type of low-skill threat actor, not the general definition of a hacker.",
    },
    category: "THREAT ACTORS",
    source: "bank",
  },
  {
    id: "q3",
    question:
      "The IT manager in your organization proposes taking steps to deflect a potential threat actor. The proposal includes the following:\n• Create and follow onboarding and off-boarding procedures.\n• Employ the principle of least privilege.\n• Have appropriate physical security controls in place.\nWhich type of threat actor do these steps guard against?",
    choices: ["Competitor", "Hacktivist", "Script kiddie", "Insider"],
    correctAnswer: 3,
    explanation:
      "These measures are specifically designed to mitigate insider threats. Onboarding/off-boarding procedures ensure proper access provisioning and revocation, least privilege limits what insiders can access, and physical security controls prevent unauthorized physical access by employees or former employees.",
    wrongExplanations: {
      0: "While competitors may attempt espionage, the specific controls listed (onboarding/off-boarding, least privilege) are focused on managing internal personnel, not external competitors.",
      1: "Hacktivists are external, politically motivated attackers. These controls focus on internal personnel management, not defending against external ideological attacks.",
      2: "Script kiddies are external, low-skill attackers who use pre-made tools. Onboarding/off-boarding procedures and least privilege are internal personnel controls that don't specifically target script kiddies.",
    },
    category: "THREAT ACTORS",
    source: "bank",
  },
  {
    id: "q4",
    question:
      "A collection of zombie computers have been set up to collect personal information. Which type of malware do the zombie computers represent?",
    choices: ["Logic bomb", "Trojan horse", "Botnet", "Spyware"],
    correctAnswer: 2,
    explanation:
      "A botnet is a network of compromised computers (called zombies) that are controlled remotely by an attacker. These zombie computers can be directed to perform coordinated tasks such as collecting personal information, launching DDoS attacks, or sending spam.",
    wrongExplanations: {
      0: "A logic bomb is malware that triggers a malicious action based on a specific condition or time. It does not describe a network of zombie computers.",
      1: "A Trojan horse is malware disguised as legitimate software. While Trojans may be used to recruit computers into a botnet, the collection of zombie computers itself is called a botnet.",
      3: "Spyware monitors individual user activity on a single machine. While the zombies are collecting information, the term for the coordinated collection of compromised machines is a botnet.",
    },
    category: "MALWARE",
    source: "bank",
  },
  {
    id: "q5",
    question:
      "Which kind of virus operates only in memory and usually exploits a trusted application like PowerShell to circumvent traditional endpoint security solutions?",
    choices: [
      "Ransomware",
      "Remote Access Trojan (RAT)",
      "Worm",
      "Fileless virus",
    ],
    correctAnswer: 3,
    explanation:
      "A fileless virus operates entirely in memory without writing files to disk. It leverages trusted system tools like PowerShell or WMI to execute malicious code, making it very difficult for traditional file-based antivirus solutions to detect.",
    wrongExplanations: {
      0: "Ransomware encrypts files and demands payment for decryption. It typically writes files to disk and does not specifically operate only in memory.",
      1: "A Remote Access Trojan (RAT) gives an attacker remote administrative control over a system. RATs are typically file-based and installed on disk, not memory-only.",
      2: "A worm is self-replicating malware that spreads across networks. Worms typically exist as files on disk and do not specifically exploit trusted applications like PowerShell to avoid detection.",
    },
    category: "MALWARE",
    source: "bank",
  },
  {
    id: "q6",
    question: "Which of the following describes a logic bomb?",
    choices: [
      "A type of malicious code similar to a virus whose primary purpose is to duplicate itself and spread while not necessarily intentionally damaging or destroying resources.",
      "A program that performs a malicious activity at a specific time or after a triggering event.",
      "A program that has no useful purpose, but attempts to spread itself to other systems and often damages resources on the systems where it is found.",
      "A program that appears to be a legitimate application, utility, game, or screensaver that performs malicious activities surreptitiously.",
    ],
    correctAnswer: 1,
    explanation:
      "A logic bomb is malware that remains dormant until a specific condition is met, such as a particular date, time, or triggering event. Once the condition is satisfied, it executes its malicious payload.",
    wrongExplanations: {
      0: "This describes a worm, which self-replicates and spreads across systems without necessarily causing intentional damage. A logic bomb does not self-replicate.",
      2: "This also describes characteristics of a worm or destructive virus that spreads and damages systems. A logic bomb is triggered by a condition, not by spreading.",
      3: "This describes a Trojan horse, which disguises itself as legitimate software. A logic bomb is defined by its trigger-based activation, not by disguising itself.",
    },
    category: "MALWARE",
    source: "bank",
  },
  {
    id: "q7",
    question:
      "A type of malware that prevents the system from being used until the victim pays the attacker money is known as what?",
    choices: [
      "Denial-of-service attack (DoS attack)",
      "Ransomware",
      "Remote Access Trojan (RAT)",
      "Fileless virus",
    ],
    correctAnswer: 1,
    explanation:
      "Ransomware is malware that locks users out of their system or encrypts their files, then demands a ransom payment in exchange for restoring access. It directly prevents the system from being used until payment is made.",
    wrongExplanations: {
      0: "A Denial-of-service (DoS) attack floods a system with traffic to make it unavailable, but it does not demand payment from the victim to restore access.",
      2: "A Remote Access Trojan (RAT) provides an attacker with backdoor administrative access to a system. It does not lock the user out or demand payment.",
      3: "A fileless virus operates in memory to avoid detection. It does not specifically lock systems or demand ransom payments.",
    },
    category: "MALWARE",
    source: "bank",
  },
  {
    id: "q8",
    question:
      "Which kind of malware provides an attacker with administrative control over a target computer through a backdoor?",
    choices: [
      "Remote Access Trojan (RAT)",
      "Trojan horse",
      "Crypto-malware",
      "Potentially Unwanted Program (PUP)",
    ],
    correctAnswer: 0,
    explanation:
      "A Remote Access Trojan (RAT) is specifically designed to give an attacker full administrative control over a victim's computer through a backdoor. It allows the attacker to remotely monitor, control, and manipulate the compromised system.",
    wrongExplanations: {
      1: "A Trojan horse is malware disguised as legitimate software, but it does not necessarily provide remote administrative backdoor access. A RAT is a specific type of Trojan with remote control capabilities.",
      2: "Crypto-malware encrypts a victim's files and demands ransom for decryption. It does not provide ongoing administrative control through a backdoor.",
      3: "A Potentially Unwanted Program (PUP) is software that may be unwanted but is not necessarily malicious. It does not provide backdoor administrative access to attackers.",
    },
    category: "MALWARE",
    source: "bank",
  },
  {
    id: "q9",
    question:
      "Which of the following are characteristics of a rootkit? (Select two.)",
    choices: [
      "Uses cookies saved on the hard drive to track user preferences.",
      "Collects various types of personal information.",
      "Requires administrator-level privileges for installation.",
      "Monitors user actions and opens pop-ups based on user preferences.",
      "Resides below regular antivirus software detection.",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 4],
    explanation:
      "The two correct answers are 'Requires administrator-level privileges for installation' and 'Resides below regular antivirus software detection.' Rootkits need root/admin-level access to install themselves deep into the operating system, and they operate at a level below where standard antivirus software scans, making them extremely difficult to detect.",
    wrongExplanations: {
      0: "Tracking user preferences via cookies is a characteristic of tracking cookies or adware, not rootkits. Rootkits focus on hiding their presence and maintaining persistent access.",
      1: "Collecting personal information is a characteristic of spyware. While a rootkit may facilitate spyware, information collection is not a defining characteristic of rootkits themselves.",
      3: "Monitoring user actions for pop-ups is characteristic of adware. Rootkits are designed to hide deep in the system and maintain stealth access, not to display advertisements.",
    },
    category: "MALWARE",
    source: "bank",
    multiSelect: 2,
  },
  {
    id: "q10",
    question: "Which of the following best describes spyware?",
    choices: [
      "It is a malicious program disguised as legitimate software.",
      "It monitors user actions that denote personal preferences and then sends pop-ups and ads to the user that match their tastes.",
      "It is a program that attempts to damage a computer system and replicate itself to other computer systems.",
      "It monitors the actions you take on your machine and sends the information back to its originating source.",
    ],
    correctAnswer: 3,
    explanation:
      "Spyware is malware that secretly monitors user activity on a computer and transmits that information back to the attacker or originating source. This can include keystrokes, browsing habits, credentials, and other sensitive data.",
    wrongExplanations: {
      0: "This describes a Trojan horse, which disguises itself as legitimate software. Spyware is defined by its surveillance behavior, not its disguise.",
      1: "This describes adware, which monitors preferences to display targeted ads and pop-ups. Spyware sends data back to the attacker rather than displaying advertisements.",
      2: "This describes a virus or worm that damages systems and self-replicates. Spyware focuses on surveillance and data exfiltration, not replication or damage.",
    },
    category: "MALWARE",
    source: "bank",
  },
  {
    id: "q11",
    question:
      "Social engineers are master manipulators. Which of the following are tactics they might use?",
    choices: [
      "Moral obligation, ignorance, and threatening",
      "Keylogging, shoulder surfing, and moral obligation",
      "Shoulder surfing, eavesdropping, and keylogging",
      "Eavesdropping, ignorance, and threatening",
    ],
    correctAnswer: 0,
    explanation:
      "Social engineering relies on psychological manipulation tactics. Moral obligation (making someone feel they should help), ignorance (exploiting a victim's lack of knowledge), and threatening (using intimidation) are all classic social engineering manipulation techniques.",
    wrongExplanations: {
      1: "Keylogging is a technical attack using hardware or software, not a social manipulation tactic. While shoulder surfing and moral obligation involve human interaction, keylogging disqualifies this answer.",
      2: "While shoulder surfing and eavesdropping involve human elements, keylogging is a technical attack that captures keystrokes through software or hardware, not a social manipulation tactic.",
      3: "Eavesdropping is more of a passive observation technique than a core social engineering manipulation tactic. The combination here mixes observation with manipulation, but moral obligation is a more fundamental SE tactic than eavesdropping.",
    },
    category: "SOCIAL ENGINEERING",
    source: "bank",
  },
  {
    id: "q12",
    question:
      "Any attack involving human interaction of some kind is referred to as what?",
    choices: [
      "An opportunistic attack",
      "Social engineering",
      "Attacker manipulation",
      "A white hat hacker",
    ],
    correctAnswer: 1,
    explanation:
      "Social engineering is the broad term for any attack that involves human interaction and psychological manipulation to trick people into breaking security procedures, divulging confidential information, or performing actions that compromise security.",
    wrongExplanations: {
      0: "An opportunistic attack refers to attacks that exploit available vulnerabilities without specific targeting. It does not specifically require human interaction.",
      2: "Attacker manipulation is not a standard security term. The correct industry term for attacks involving human interaction is social engineering.",
      3: "A white hat hacker is an ethical hacker who tests security with authorization. This describes a person, not a type of attack.",
    },
    category: "SOCIAL ENGINEERING",
    source: "bank",
  },
  {
    id: "q13",
    question:
      "Which of the following is a common social engineering attack?",
    choices: [
      "Using a sniffer to capture network traffic",
      "Distributing false information about an organization's financial status",
      "Distributing hoax virus-information emails",
      "Logging on with stolen credentials",
    ],
    correctAnswer: 2,
    explanation:
      "Distributing hoax virus-information emails is a common social engineering attack because it manipulates users through fear and urgency, tricking them into taking unnecessary actions such as deleting important files or forwarding the hoax to others.",
    wrongExplanations: {
      0: "Using a sniffer to capture network traffic is a technical network attack, not a social engineering attack. It does not involve manipulating humans.",
      1: "Distributing false financial information is more related to fraud or market manipulation, not a typical social engineering attack vector in cybersecurity.",
      3: "Logging on with stolen credentials is an unauthorized access attack. While the credentials may have been obtained through social engineering, the act of logging on itself is not a social engineering attack.",
    },
    category: "SOCIAL ENGINEERING",
    source: "bank",
  },
  {
    id: "q14",
    question:
      "Which of the following are examples of social engineering attacks? (Select three.)",
    choices: [
      "Port scanning",
      "Impersonation",
      "Keylogging",
      "Shoulder surfing",
      "War dialing",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2, 3],
    explanation:
      "The three correct answers are Impersonation, Keylogging (physical keylogger installation requires social engineering/physical access), and Shoulder surfing. Impersonation involves pretending to be someone else to gain trust. Shoulder surfing involves observing someone's screen or keyboard. Physical keylogging involves placing a device that requires physical access and social pretexting. Port scanning and war dialing are purely technical reconnaissance attacks.",
    wrongExplanations: {
      0: "Port scanning is a purely technical reconnaissance technique that probes network ports for vulnerabilities. It does not involve any human interaction or manipulation.",
      4: "War dialing is a technical attack that automatically dials phone numbers to find modems and fax machines. It is an automated process with no human manipulation involved.",
    },
    category: "SOCIAL ENGINEERING",
    source: "bank",
    multiSelect: 3,
  },
  {
    id: "q15",
    question:
      "Jason is at home, attempting to access the website for his music store. When he goes to the website, it has a simple form asking for a name, email, and phone number. This is not the music store website. Jason is sure the website has been hacked. How did the attacker accomplish this hack?",
    choices: [
      "Host file modification",
      "DNS cache poisoning",
      "Social networking",
      "Feigning ignorance",
    ],
    correctAnswer: 1,
    explanation:
      "DNS cache poisoning (also called DNS spoofing) corrupts the DNS resolver cache so that a domain name resolves to an incorrect IP address. This redirects Jason to a fake website when he types in the correct URL for his music store, making it appear as though the website was hacked.",
    wrongExplanations: {
      0: "Host file modification involves changing the local hosts file on a computer to redirect specific domains. While possible, DNS cache poisoning is the more likely and scalable attack described here.",
      2: "Social networking is a platform for online interaction, not an attack method. This scenario describes a technical redirection attack, not social media exploitation.",
      3: "Feigning ignorance is a social engineering tactic where an attacker pretends not to know something. It does not explain how Jason was redirected to a different website.",
    },
    category: "NETWORK ATTACKS",
    source: "bank",
  },
  {
    id: "q31",
    question:
      "Jason is at home, attempting to access the website for his music store. When he goes to the website, it has a simple form asking for a name, email, and phone number. This is not the music store website. Jason is sure the website has been hacked. How did the attacker accomplish this hack?",
    choices: [
      "Host file modification",
      "DNS cache poisoning",
      "Social networking",
      "Feigning ignorance",
    ],
    correctAnswer: 1,
    explanation:
      "DNS cache poisoning (also called DNS spoofing) corrupts the DNS resolver cache so that a domain name resolves to an incorrect IP address. This redirects Jason to a fake website when he types in the correct URL for his music store, making it appear as though the website was hacked.",
    wrongExplanations: {
      0: "Host file modification involves changing the local hosts file on a computer to redirect specific domains. While possible, DNS cache poisoning is the more likely and scalable attack described here.",
      2: "Social networking is a platform for online interaction, not an attack method. This scenario describes a technical redirection attack, not social media exploitation.",
      3: "Feigning ignorance is a social engineering tactic where an attacker pretends not to know something. It does not explain how Jason was redirected to a different website.",
    },
    category: "NETWORK ATTACKS",
    source: "bank",
  },
  {
    id: "q32",
    question:
      "A disgruntled administrator is fired for negligence at your organization. Thirty days later, your organization's internal file server and backup server crash at exactly the same time. Examining the servers, it appears that critical operating system files were deleted from both systems. If the disgruntled administrator was responsible for administering those servers during her employment, this is most likely an example of what kind of malware?",
    choices: ["Crypto-malware", "Trojan", "Worm", "Logic bomb"],
    correctAnswer: 3,
    explanation:
      "A logic bomb is malware programmed to activate after a specific condition or time elapses. The 30-day delay after the administrator's firing and the simultaneous crash of both servers strongly indicate a pre-planted logic bomb set to trigger after a certain period.",
    wrongExplanations: {
      0: "Crypto-malware encrypts files and demands ransom. In this scenario, files were deleted rather than encrypted, and there is no ransom demand.",
      1: "A Trojan disguises itself as legitimate software. The timed, coordinated nature of this attack (exactly 30 days later, both servers simultaneously) points to a logic bomb, not a Trojan.",
      2: "A worm self-replicates across networks. The precise timing and coordinated deletion suggest a pre-programmed trigger, which is characteristic of a logic bomb, not a worm.",
    },
    category: "MALWARE",
    source: "bank",
  },
  {
    id: "q33",
    question:
      "A desktop system on your network has been compromised. Despite loading different operating systems using different media on the same desktop, attackers appear to have access to that system every time it is powered up and placed on the network. This could be an example of what type of rootkit?",
    choices: ["Application", "Kernel", "Firmware", "Virtual"],
    correctAnswer: 2,
    explanation:
      "A firmware rootkit embeds itself in the device's firmware (such as the BIOS or UEFI). Since firmware persists independently of the operating system, reinstalling or changing the OS does not remove it, which explains why the attacker retains access regardless of which OS is loaded.",
    wrongExplanations: {
      0: "An application rootkit operates at the application level within the OS. Reinstalling or changing the operating system would remove an application-level rootkit.",
      1: "A kernel rootkit operates at the kernel level of the OS. Loading a different operating system would replace the kernel and eliminate a kernel-level rootkit.",
      3: "A virtual rootkit creates a virtual environment to intercept OS operations. Changing the operating system or boot media would likely disrupt a virtual rootkit's operation.",
    },
    category: "MALWARE",
    source: "bank",
  },
  {
    id: "q34",
    question:
      "A colleague has been urging you to download a new animated screensaver he has been using for several weeks. While he is showing you the program, the cursor on his screen moves on its own and a command prompt window opens and quickly closes. You can't tell what if anything was displayed in that command prompt window. Your colleague says \"It's been doing that for a while, but it's no big deal.\" Based on what you've seen, you suspect the animated screensaver is really what type of malware?",
    choices: ["A worm", "A Trojan", "Ransomware", "Adware"],
    correctAnswer: 1,
    explanation:
      "A Trojan horse is malware disguised as legitimate software. The animated screensaver appears to be a useful program but is actually performing malicious activities in the background, evidenced by the cursor moving on its own and command prompt windows opening — signs of unauthorized remote access or hidden commands.",
    wrongExplanations: {
      0: "A worm self-replicates and spreads across networks without user interaction. The screensaver was manually downloaded and installed, and the symptoms indicate hidden malicious functionality rather than self-replication.",
      2: "Ransomware encrypts files and demands payment. The symptoms described (cursor movement, command prompts) suggest remote control activity, not file encryption or ransom demands.",
      3: "Adware displays unwanted advertisements. The symptoms of cursor movement and command prompt windows indicate remote control or hidden command execution, not advertisement display.",
    },
    category: "MALWARE",
    source: "bank",
  },
  {
    id: "q35",
    question:
      'Several desktops in your organization are displaying a red screen with the message "Your files have been encrypted. Pay 1 bitcoin to recover them." These desktops have most likely been affected by what type of malware?',
    choices: ["Zotob worm", "Adware", "Ransomware", "Rootkit"],
    correctAnswer: 2,
    explanation:
      "Ransomware encrypts a victim's files and displays a ransom demand, typically requesting cryptocurrency payment for the decryption key. The red screen with a message demanding bitcoin payment is a textbook example of a ransomware infection.",
    wrongExplanations: {
      0: "The Zotob worm is a specific network worm that exploits Windows vulnerabilities to spread. It does not encrypt files or demand ransom payments.",
      1: "Adware displays unwanted advertisements and pop-ups. It does not encrypt files or demand payment for their recovery.",
      3: "A rootkit hides deep in the system to maintain persistent access. While a rootkit might be used alongside ransomware, it does not itself encrypt files or display ransom demands.",
    },
    category: "MALWARE",
    source: "bank",
  },
  {
    id: "q36",
    question:
      "A user in your organization is having issues with her laptop. Every time she opens a web browser, she sees different pop-ups every few minutes. It doesn't seem to matter which websites are being visited—the pop-ups still appear. What type of malware does this sound like?",
    choices: ["Adware", "Virus", "Ransomware", "BitLocker"],
    correctAnswer: 0,
    explanation:
      "Adware is software that automatically displays or downloads advertising material such as pop-ups when a user is online. The fact that pop-ups appear regardless of which website is visited indicates the adware is installed locally on the laptop, not coming from specific websites.",
    wrongExplanations: {
      1: "A virus is a general term for self-replicating malicious code. While a virus could theoretically cause pop-ups, persistent advertising pop-ups across all websites are the hallmark of adware specifically.",
      2: "Ransomware encrypts files and demands payment. Pop-up advertisements are not a symptom of ransomware.",
      3: "BitLocker is a legitimate Microsoft disk encryption feature, not malware. It does not cause pop-up advertisements.",
    },
    category: "MALWARE",
    source: "bank",
  },
  {
    id: "q37",
    question:
      "While waiting in the lobby of your building for a guest, you notice a man in a red shirt standing close to a locked door with a large box in his hands. He waits for someone else to come along and open the locked door, then proceeds to follow her inside. What type of social engineering attack have you just witnessed?",
    choices: ["Impersonation", "Phishing", "Boxing", "Tailgating"],
    correctAnswer: 3,
    explanation:
      "Tailgating (also called piggybacking) is a physical social engineering attack where an unauthorized person follows an authorized person through a secured door or entrance. The man waited for someone with access to open the door and then followed them inside without using his own credentials.",
    wrongExplanations: {
      0: "Impersonation involves pretending to be someone else (like an employee or authority figure). While the man may have appeared to belong there, the specific act of following someone through a secured door is tailgating.",
      1: "Phishing is an electronic attack using fraudulent emails or messages to trick victims into revealing information. This scenario describes a physical access attack, not an electronic one.",
      2: "Boxing is not a recognized social engineering attack term in cybersecurity. The correct term for following someone through a secured entrance is tailgating.",
    },
    category: "SOCIAL ENGINEERING",
    source: "bank",
  },
  {
    id: "q38",
    question:
      'A user reports seeing "odd certificate warnings" on her web browser this morning whenever she visits Google. Looking at her browser, you see certificate warnings. Looking at the network traffic, you see all HTTP and HTTPS requests from that system are being routed to the same IP regardless of destination. Which of the following attack types are you seeing in this case?',
    choices: ["Phishing", "Man-in-the-middle", "Cryptolocker", "DDoS"],
    correctAnswer: 1,
    explanation:
      "A man-in-the-middle (MITM) attack intercepts communications between two parties. The certificate warnings occur because the attacker's system is presenting its own certificates instead of the legitimate ones. All traffic being routed to the same IP confirms an intermediary is intercepting and relaying all network requests.",
    wrongExplanations: {
      0: "Phishing uses fraudulent communications to trick users into revealing information. The certificate warnings and traffic rerouting indicate active network interception, not a phishing email or fake website.",
      2: "CryptoLocker is a type of ransomware that encrypts files. It does not cause certificate warnings or reroute network traffic to a single IP address.",
      3: "A DDoS (Distributed Denial of Service) attack overwhelms a system with traffic to make it unavailable. It does not cause certificate warnings or reroute traffic through a single IP.",
    },
    category: "NETWORK ATTACKS",
    source: "bank",
  },
  {
    id: "q39",
    question:
      "When an attacker captures network traffic and retransmits it at a later time, what type of attack are they attempting?",
    choices: [
      "Denial of service attack",
      "Replay attack",
      "Bluejacking attack",
      "Man-in-the-middle attack",
    ],
    correctAnswer: 1,
    explanation:
      "A replay attack involves an attacker capturing valid network traffic (such as authentication packets) and retransmitting it at a later time to gain unauthorized access or repeat a transaction. The key characteristic is the delayed retransmission of previously captured legitimate data.",
    wrongExplanations: {
      0: "A denial of service attack floods a system to make it unavailable. It does not involve capturing and retransmitting legitimate traffic at a later time.",
      2: "A bluejacking attack sends unsolicited messages to Bluetooth-enabled devices. It does not involve capturing and replaying network traffic.",
      3: "A man-in-the-middle attack intercepts and potentially alters communications in real time between two parties. A replay attack specifically involves capturing and retransmitting traffic later, not real-time interception.",
    },
    category: "NETWORK ATTACKS",
    source: "bank",
  },
  {
    id: "q40",
    question:
      "Your e-commerce site is crashing under an extremely high traffic volume. Looking at the traffic logs, you see tens of thousands of requests for the same URL coming from hundreds of different IP addresses around the world. What type of attack are you facing?",
    choices: ["DoS", "DDoS", "DNS poisoning", "Snarfing"],
    correctAnswer: 1,
    explanation:
      "A Distributed Denial of Service (DDoS) attack uses multiple compromised systems (often a botnet) distributed across many different IP addresses worldwide to flood a target with overwhelming traffic. The key indicator is the hundreds of different source IPs, distinguishing it from a regular DoS attack.",
    wrongExplanations: {
      0: "A DoS (Denial of Service) attack typically originates from a single source or a small number of sources. The hundreds of different IP addresses worldwide indicate a distributed attack (DDoS), not a simple DoS.",
      2: "DNS poisoning corrupts DNS records to redirect traffic to malicious sites. It does not cause traffic floods from hundreds of IPs crashing a website.",
      3: "Snarfing refers to unauthorized interception of data (particularly over wireless networks). It does not involve flooding a website with traffic from multiple sources.",
    },
    category: "NETWORK ATTACKS",
    source: "bank",
  },
  {
    id: "q41",
    question:
      "A user wants to know if the network is down, because she is unable to connect to anything. While troubleshooting, you notice the MAC address for her default gateway doesn't match the MAC address of your organization's router. What type of attack has been used against this user?",
    choices: [
      "Consensus attack",
      "ARP poisoning",
      "Refactoring",
      "Smurf attack",
    ],
    correctAnswer: 1,
    explanation:
      "ARP poisoning (also called ARP spoofing) involves an attacker sending falsified ARP messages to link their MAC address with the IP address of a legitimate network device (like the default gateway). This causes traffic intended for the gateway to be sent to the attacker instead, explaining the mismatched MAC address.",
    wrongExplanations: {
      0: "A consensus attack targets blockchain networks by gaining majority control of the network's computing power. It is not related to MAC address manipulation on local networks.",
      2: "Refactoring is a software development practice of restructuring code without changing its behavior. It is not a network attack and has nothing to do with MAC address spoofing.",
      3: "A Smurf attack is a DDoS attack that floods a target with ICMP ping requests using a spoofed source address. It does not involve manipulating ARP tables or MAC addresses.",
    },
    category: "NETWORK ATTACKS",
    source: "bank",
  },
  {
    id: "q42",
    question:
      'A user in your organization contacts you to see if there\'s any update to the "Account compromise" that happened last week. When you ask him to explain what he means, the user tells you he received a phone call earlier in the week from your department and was asked to verify his userid and password. The user says he gave the caller his userid and password. This user has fallen victim to what specific type of attack?',
    choices: ["Spear phishing", "Vishing", "Phishing", "Replication"],
    correctAnswer: 1,
    explanation:
      "Vishing (voice phishing) is a social engineering attack conducted over the phone. The attacker called the user, impersonated the IT department, and tricked the user into revealing their credentials over a voice call, which is the defining characteristic of vishing.",
    wrongExplanations: {
      0: "Spear phishing is a targeted phishing attack typically delivered via email to a specific individual. This attack was conducted over the phone, making it vishing rather than spear phishing.",
      2: "Phishing typically refers to fraudulent emails or websites designed to steal information. Since this attack was conducted via a phone call, the more specific term is vishing.",
      3: "Replication is not a standard social engineering attack term. The phone-based credential theft described here is specifically called vishing.",
    },
    category: "SOCIAL ENGINEERING",
    source: "bank",
  },
  {
    id: "q43",
    question:
      "Coming into your office, you overhear a conversation between two security guards. One guard is telling the other she caught several people digging through the trash behind the building early this morning. The security guard says the people claimed to be looking for aluminum cans, but only had a bag of papers\u2014 no cans. What type of attack has this security guard witnessed?",
    choices: ["Spear phishing", "Pharming", "Dumpster diving", "Combing"],
    correctAnswer: 2,
    explanation:
      "Dumpster diving is a social engineering technique where attackers search through an organization's trash to find sensitive information such as documents, passwords, or other data that was improperly discarded. The people collecting papers (not cans) from the trash are clearly engaged in dumpster diving.",
    wrongExplanations: {
      0: "Spear phishing is a targeted email-based attack. Searching through physical trash for information is dumpster diving, not spear phishing.",
      1: "Pharming redirects website traffic from legitimate sites to fraudulent ones through DNS manipulation. It is a technical attack unrelated to physically searching through trash.",
      3: "Combing is not a recognized social engineering attack term in cybersecurity. The correct term for searching through trash for sensitive information is dumpster diving.",
    },
    category: "SOCIAL ENGINEERING",
    source: "bank",
  },
  {
    id: "q44",
    question:
      "A user calls to report a problem with an application you support. The user says when she accidentally pasted an entire paragraph into an input field, the application crashed. You are able to consistently reproduce the results using the same method. What vulnerability might that user have accidentally discovered in that application?",
    choices: [
      "Poison apple",
      "Shoulder surfing",
      "Smurfing",
      "Buffer overflow",
    ],
    correctAnswer: 3,
    explanation:
      "A buffer overflow occurs when more data is written to a buffer than it can hold, causing the excess data to overwrite adjacent memory. Pasting a large paragraph into an input field that cannot handle that volume of data consistently crashes the application, which is a classic symptom of a buffer overflow vulnerability.",
    wrongExplanations: {
      0: "Poison apple is not a standard recognized vulnerability or attack type in cybersecurity. The crash caused by excess input data is characteristic of a buffer overflow.",
      1: "Shoulder surfing is a social engineering technique where someone watches over your shoulder to steal information. It is not a software vulnerability that causes application crashes.",
      2: "Smurfing (Smurf attack) is a network-based DDoS attack using ICMP ping requests. It is a network attack, not an application input vulnerability.",
    },
    category: "BUFFER OVERFLOW",
    source: "bank",
  },
  {
    id: "q45",
    question:
      "Attacks by an individual or even a small group of attackers fall into which threat category?",
    choices: [
      "Unorganized threat",
      "APT",
      "Singular threat",
      "Hacktivist",
    ],
    correctAnswer: 0,
    explanation:
      "Unorganized threats are attacks carried out by individuals or small groups without the structure, resources, or coordination of organized threat groups. These attackers typically lack the funding and sophistication of APTs or organized cybercrime groups.",
    wrongExplanations: {
      1: "APT (Advanced Persistent Threat) describes highly organized, well-funded, and sophisticated threat actors (often nation-states). Individual or small group attacks lack this level of organization.",
      2: "Singular threat is not a standard threat classification term in cybersecurity. The correct term for individual or small group attacks is unorganized threat.",
      3: "Hacktivist describes a motivation (political/social activism) rather than the organizational structure of the threat. An individual attacker is categorized as an unorganized threat regardless of motivation.",
    },
    category: "THREAT ACTORS",
    source: "bank",
  },
  {
    id: "q46",
    question:
      "Which of the following is the term used to refer to individuals who do not have the technical expertise to develop scripts or discover new vulnerabilities in software but who have just enough understanding of computer systems to be able to download and run scripts that others have developed?",
    choices: [
      "Script kiddies",
      "Hackers",
      "Simple intruders",
      "Intermittent attackers",
    ],
    correctAnswer: 0,
    explanation:
      "Script kiddies are inexperienced individuals who lack the technical skill to write their own exploits or discover vulnerabilities. Instead, they use pre-made scripts, tools, and exploits developed by more skilled hackers to carry out attacks.",
    wrongExplanations: {
      1: "Hacker is a broad, general term for anyone using technical knowledge for unauthorized access. It does not specifically describe the low skill level of someone who only runs others' scripts.",
      2: "Simple intruders is not a recognized standard term in cybersecurity threat classification. The correct term for low-skill individuals using pre-made scripts is script kiddies.",
      3: "Intermittent attackers is not a recognized standard term in cybersecurity. The term script kiddies specifically describes individuals who rely on others' tools due to limited technical expertise.",
    },
    category: "THREAT ACTORS",
    source: "bank",
  },
  {
    id: "q47",
    question:
      "What is the name given to a group of hackers who work together for a collectivist effort, typically on behalf of some cause?",
    choices: [
      "Script kiddies",
      "Hacktivists",
      "Motivated hackers",
      "Organized intruders",
    ],
    correctAnswer: 1,
    explanation:
      "Hacktivists are hackers who are motivated by political, social, or ideological causes. They work collectively to promote their cause through hacking activities such as website defacement, data leaks, or DDoS attacks against organizations they oppose.",
    wrongExplanations: {
      0: "Script kiddies are low-skill individuals who use pre-made tools. The term does not imply collective action or cause-based motivation.",
      2: "Motivated hackers is not a standard cybersecurity term. The specific term for cause-driven, collectivist hacking groups is hacktivists.",
      3: "Organized intruders is not a recognized standard term. While hacktivists are organized, the specific term that captures their cause-driven collective hacking is hacktivists.",
    },
    category: "THREAT ACTORS",
    source: "bank",
  },
  {
    id: "q48",
    question:
      'Brandon is helping Fred with his computer. He needs Fred to enter his username and password into the system. Fred enters the username and password while Brandon is watching him. Brandon explains to Fred that it is not a good idea to allow anyone to watch you type in usernames or passwords. Which type of social engineering attack is Fred referring to?',
    choices: [
      "Keyloggers",
      "Shoulder surfing",
      "Eavesdropping",
      "Spam and spim",
    ],
    correctAnswer: 1,
    explanation:
      "Shoulder surfing is the act of looking over someone's shoulder (or observing them from nearby) to steal information such as passwords, PINs, or other sensitive data as they type or view it. Brandon watching Fred type his credentials is a classic example.",
    wrongExplanations: {
      0: "Keyloggers are hardware devices or software that record keystrokes. Brandon was physically watching Fred type, not using a technical device to capture keystrokes.",
      2: "Eavesdropping involves secretly listening to conversations to gather information. Brandon was watching Fred type (visual observation), not listening to a conversation.",
      3: "Spam and spim are unsolicited messages sent via email (spam) or instant messaging (spim). They are not related to visually observing someone enter credentials.",
    },
    category: "SOCIAL ENGINEERING",
    source: "bank",
  },
  {
    id: "q49",
    question:
      "Which of the following attacks is a form of software exploitation that transmits or submits a longer stream of data than the input variable is designed to handle?",
    choices: [
      "Time-of-check to time-of-use attack",
      "Data diddling",
      "Smurf attack",
      "Buffer overflow attack",
    ],
    correctAnswer: 3,
    explanation:
      "A buffer overflow attack exploits a software vulnerability by sending more data to an input buffer than it was designed to hold. The excess data overflows into adjacent memory, potentially allowing the attacker to execute arbitrary code or crash the application.",
    wrongExplanations: {
      0: "A time-of-check to time-of-use (TOCTOU) attack exploits the gap between when a condition is checked and when the result is used. It does not involve overloading input buffers with excess data.",
      1: "Data diddling involves unauthorized modification of data before or during input into a system. It is about changing data values, not overflowing input buffers.",
      2: "A Smurf attack is a DDoS attack using spoofed ICMP packets. It is a network-based attack, not a software exploitation that overflows input buffers.",
    },
    category: "BUFFER OVERFLOW",
    source: "bank",
  },
  {
    id: "q50",
    question:
      "You are cleaning your desk at work. You toss several stacks of paper in the trash, including a sticky note with your password written on it. Which of the following types of non-technical password attacks have you enabled?",
    choices: [
      "Password guessing",
      "Shoulder surfing",
      "Social engineering",
      "Dumpster diving",
    ],
    correctAnswer: 3,
    explanation:
      "Dumpster diving is the practice of searching through trash to find discarded sensitive information. By throwing away a sticky note with your password in the trash, you have enabled someone to find your credentials through dumpster diving.",
    wrongExplanations: {
      0: "Password guessing involves trying common or likely passwords to gain access. Finding a written password in the trash is dumpster diving, not guessing.",
      1: "Shoulder surfing involves observing someone as they enter sensitive information. The scenario describes discarding a written password, not someone watching you type it.",
      2: "Social engineering is a broad term for manipulating people into revealing information. Dumpster diving is a specific non-technical attack that does not require manipulating the victim directly.",
    },
    category: "SOCIAL ENGINEERING",
    source: "bank",
  },
  {
    id: "q51",
    question:
      "An attacker sends an unwanted and unsolicited email message to multiple recipients with an attachment that contains malware. Which kind of attack has occurred in this scenario?",
    choices: ["Phishing", "Open SMTP relay", "Repudiation attack", "Spam"],
    correctAnswer: 3,
    explanation:
      "Spam refers to unwanted and unsolicited bulk email messages. The scenario describes an attacker sending unsolicited emails to multiple recipients, which is the definition of spam. While the attachment contains malware, the delivery method is spam.",
    wrongExplanations: {
      0: "Phishing specifically involves fraudulent messages designed to trick recipients into revealing sensitive information or credentials. The scenario describes unsolicited bulk email (spam) with a malware attachment.",
      1: "An open SMTP relay is a misconfigured mail server that allows unauthorized users to send email through it. It is a server vulnerability, not the type of attack described in this scenario.",
      2: "A repudiation attack involves denying that an action was performed. It is unrelated to sending unsolicited emails with malware attachments.",
    },
    category: "SOCIAL ENGINEERING",
    source: "bank",
  },
  {
    id: "q52",
    question:
      "Which of the following social engineering attacks uses voice over IP (VoIP) to gain sensitive information?",
    choices: ["Hoax", "Spear phishing", "Shoulder surfing", "Vishing"],
    correctAnswer: 3,
    explanation:
      "Vishing (voice phishing) is a social engineering attack that uses voice communications, including VoIP, to trick victims into revealing sensitive information such as credentials, financial data, or personal details over the phone.",
    wrongExplanations: {
      0: "A hoax is a false warning or deceptive message, often spread via email, designed to cause alarm or trick users into unnecessary actions. It does not specifically use VoIP.",
      1: "Spear phishing is a targeted phishing attack delivered via email to a specific individual or organization. It uses email, not VoIP voice calls.",
      2: "Shoulder surfing involves physically watching someone enter sensitive information. It is a visual observation attack, not a voice-based attack using VoIP.",
    },
    category: "SOCIAL ENGINEERING",
    source: "bank",
  },
  {
    id: "q53",
    question:
      "You are instant messaging a coworker, and you get a malicious link. Which type of social engineering attack is this?",
    choices: ["Spam", "Spim", "Surf", "Hoax"],
    correctAnswer: 1,
    explanation:
      "Spim (spam over instant messaging) is the delivery of unsolicited and unwanted messages, including malicious links, through instant messaging platforms. Receiving a malicious link via instant messaging is a classic example of spim.",
    wrongExplanations: {
      0: "Spam refers to unsolicited bulk messages sent via email. Since this attack was delivered through instant messaging rather than email, the correct term is spim.",
      2: "Surf is not a recognized social engineering attack term in cybersecurity. The correct term for malicious messages sent via instant messaging is spim.",
      3: "A hoax is a false warning or misleading message designed to cause fear or trick users. While a hoax could be sent via IM, receiving a malicious link specifically is called spim.",
    },
    category: "SOCIAL ENGINEERING",
    source: "bank",
  },
  {
    id: "q54",
    question:
      "Which of the following are subject to SQL injection attacks?",
    choices: [
      "Web servers serving static content.",
      "Database servers",
      "ActiveX controls",
      "Browsers that allow client-side scripts",
    ],
    correctAnswer: 1,
    explanation:
      "SQL injection attacks target database servers by inserting malicious SQL commands into input fields that interact with the database. The injected commands are executed by the database server, potentially exposing, modifying, or deleting stored data.",
    wrongExplanations: {
      0: "Web servers serving only static content do not process dynamic queries or interact with databases, making them not vulnerable to SQL injection attacks.",
      2: "ActiveX controls are browser-based components for running interactive content. They do not directly interact with SQL databases and are not targets of SQL injection.",
      3: "Browsers that allow client-side scripts execute JavaScript or similar code locally. SQL injection targets server-side database queries, not client-side browser scripts.",
    },
    category: "APPLICATION ATTACKS",
    source: "bank",
  },
  {
    id: "q55",
    question: "Which of the following BEST describes phishing?",
    choices: [
      "Malware that often uses email as its distribution mechanism.",
      "An email server that accepts mail and forwards it to other mail servers.",
      "Unwanted and unsolicited email sent to many recipients.",
      "A fraudulent email that claims to be from a trusted organization.",
    ],
    correctAnswer: 3,
    explanation:
      "Phishing is a social engineering attack where attackers send fraudulent emails that appear to come from a trusted, legitimate organization. The goal is to deceive recipients into revealing sensitive information such as passwords, credit card numbers, or personal data.",
    wrongExplanations: {
      0: "This describes malware distribution via email, not phishing specifically. Phishing is about fraudulent impersonation to steal information, not malware delivery.",
      1: "This describes an email relay server (or open relay), which is a mail infrastructure component. It is not an attack type.",
      2: "This describes spam, which is unsolicited bulk email. Phishing specifically involves impersonating a trusted entity to steal information, which is distinct from generic spam.",
    },
    category: "SOCIAL ENGINEERING",
    source: "bank",
  },
  {
    id: "q56",
    question:
      "An attacker inserts SQL database commands into a data input field of an order form used by a web-based application. When submitted, these commands are executed on the remote database server, causing customer contact information from the database to be sent to the malicious user's web browser.\nWhich practice would have prevented this exploit?",
    choices: [
      "Installing antivirus, anti-spyware, pop-up blockers, and firewall software",
      "Using the latest browser version and patch level",
      "Implementing client-side validation",
      "Implementing a script blocker",
    ],
    correctAnswer: 2,
    explanation:
      "Implementing input validation (in this case client-side validation, as listed among the options) would help prevent SQL injection by checking and sanitizing user input before it reaches the database. While server-side validation is the stronger defense in practice, client-side validation is the best answer among the given choices for preventing malicious SQL commands from being submitted.",
    wrongExplanations: {
      0: "Antivirus, anti-spyware, pop-up blockers, and firewalls protect against malware and network threats but do not validate or sanitize web form input to prevent SQL injection.",
      1: "Using the latest browser version and patch level protects against browser vulnerabilities but does not prevent SQL injection attacks, which exploit server-side application input handling.",
      3: "A script blocker prevents client-side scripts (like JavaScript) from running in the browser. SQL injection targets server-side database queries, not client-side scripts, so a script blocker would not prevent this exploit.",
    },
    category: "APPLICATION ATTACKS",
    source: "bank",
  },
];
