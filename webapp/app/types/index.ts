type Course = {
  id: number;
  title: string;
  displayTitle: string;
  type: string;
  description: string;
}

type CourseCreation = {
  title: FormDataEntryValue | null;
  displayTitle: FormDataEntryValue | null;
  type: FormDataEntryValue | null;
  description: FormDataEntryValue | null;
}

type Mentor = {
  id: number;
  name: string;
  email: string;
  description: string;
  specialty: string;
}

type MentorCreation = {
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  description: FormDataEntryValue | null;
  specialty: FormDataEntryValue | null;
}

type Mentee = {
  id: number;
  name: string;
  email: string;
}

type MenteeCreation = {
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
}

export type { Course, CourseCreation, Mentee, MenteeCreation, Mentor, MentorCreation }