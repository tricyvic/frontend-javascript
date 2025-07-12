interface MajorCredits{
    credits: number;
    // Add a brand property to each interface in order to uniquely identify each of them
    _majorCreditBrand: void;
}

interface MinorCredits{
    credits: number;
    // Add a brand property to each interface in order to uniquely identify each of them
    _majorCreditBrand: void;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}