import type { MatchingGroup } from "../types";

export const matchingGroups: MatchingGroup[] = [
  {
    id: "malware-types",
    title: "Malware Types",
    pairs: [
      {
        term: "Ransomware",
        definition:
          "Prevents a user's device from properly functioning until a fee is paid",
      },
      {
        term: "Cryptomalware",
        definition:
          "Encrypts all files on the device so that none of them can be opened without a key",
      },
      {
        term: "Fileless virus",
        definition:
          "Operates only in memory and exploits trusted applications like PowerShell to circumvent endpoint security",
      },
      {
        term: "Worm",
        definition:
          "A malicious program that uses a computer network to replicate; designed to enter through network vulnerabilities",
      },
      {
        term: "Botnet",
        definition:
          "A collection of zombie computers under the control of a bot herder using command and control (C&C) structure",
      },
      {
        term: "Spyware",
        definition:
          "Monitors the actions you take on your machine and sends the information back to its originating source",
      },
      {
        term: "Keylogger",
        definition:
          "Silently captures and stores each keystroke that a user types on the keyboard",
      },
      {
        term: "Trojan horse",
        definition:
          "An executable program that masquerades as performing a benign activity but also does something malicious",
      },
      {
        term: "Remote Access Trojan (RAT)",
        definition:
          "Gives the threat agent unauthorized remote access to the victim's computer through a backdoor",
      },
      {
        term: "Logic bomb",
        definition:
          "A program that performs a malicious activity at a specific time or after a triggering event",
      },
      {
        term: "Rootkit",
        definition:
          "Malware that can hide its presence and the presence of other malware by accessing lower layers of the OS",
      },
      {
        term: "Backdoor",
        definition:
          "Gives access to a computer, program, or service that circumvents any normal security protections",
      },
      {
        term: "PUP (Potentially Unwanted Program)",
        definition:
          "Software the user does not want, such as adware that obstructs content or hijacks search engines",
      },
    ],
  },
  {
    id: "social-engineering",
    title: "Social Engineering Attacks",
    pairs: [
      {
        term: "Phishing",
        definition:
          "Sending a fraudulent email that claims to be from a trusted organization to trick users into surrendering private information",
      },
      {
        term: "Spear phishing",
        definition:
          "A targeted phishing attack directed at specific individuals or organizations",
      },
      {
        term: "Whaling",
        definition:
          "A phishing attack specifically targeting high-level executives",
      },
      {
        term: "Vishing",
        definition:
          "A social engineering attack that uses voice over IP (VoIP) to gain sensitive information",
      },
      {
        term: "Smishing",
        definition:
          "A phishing attack delivered through SMS text messages",
      },
      {
        term: "Typo squatting",
        definition:
          "Purchasing fake sites with domain names spelled similarly to actual sites to redirect users",
      },
      {
        term: "Pharming",
        definition:
          "Exploiting how a URL is converted into its corresponding IP address to redirect users to a fake site",
      },
      {
        term: "Hoaxes",
        definition:
          "False warnings, often in emails claiming to come from IT, purporting a deadly virus is circulating",
      },
      {
        term: "Watering hole",
        definition:
          "An attack directed toward a smaller group by compromising a website the group frequently visits",
      },
      {
        term: "Dumpster diving",
        definition:
          "Digging through trash receptacles to find information that can be useful in an attack",
      },
      {
        term: "Tailgating",
        definition:
          "Following behind an authorized person through a secure entry door",
      },
      {
        term: "Shoulder surfing",
        definition:
          "Casually observing someone entering secret information like passwords or security codes",
      },
      {
        term: "Impersonation",
        definition:
          "Masquerading as a real or fictitious character and playing the role of that person with a victim",
      },
      {
        term: "Spim",
        definition:
          "Spam delivered through instant messaging (IM) instead of email",
      },
    ],
  },
  {
    id: "threat-actors",
    title: "Threat Actors",
    pairs: [
      {
        term: "Insider",
        definition:
          "An employee or contractor who steals company data or sabotages systems from within the organization",
      },
      {
        term: "Hacktivist",
        definition:
          "A group of hackers who work together for a collectivist effort, typically on behalf of some cause",
      },
      {
        term: "Script kiddie",
        definition:
          "An individual who lacks technical expertise but can download and run scripts that others have developed",
      },
      {
        term: "APT (Advanced Persistent Threat)",
        definition:
          "The most organized, well-funded, and dangerous type of threat actor",
      },
      {
        term: "Hacker",
        definition:
          "A general term for any individual who uses their technical knowledge to gain unauthorized access to an organization",
      },
    ],
  },
];
