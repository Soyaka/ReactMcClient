


export type CoursePageLister = {
    courseId : string
    courseName : string
    pages : Page[]
    handlePageClick : any
    progress ?: number
    isBookmarked ?: boolean
    isFree ?: boolean
    isReading ?: boolean
    isCompleted ?: boolean
}


export type Course = {
  content_info: {
    id: string;
    title: string;
    description: string;
    author: string;
    skill_level: string;
    technology: string;
    language: string;
    keywords: string[];
    is_free: boolean;
    is_trial: boolean;
  };
  pages: Page[];
  duration: string;
};

type Resource = {
    id: string;
    type?: string;
    name: string;
    description: string;
    url: string;
};

type Section = {
    title: string;
    description: string;
    resources?: Resource[];
    paragraph: string;
};

type Question = {
    content: string;
    options: string[];
    answer: string;
};

export type Page = {
    id: string;
    title: string;
    sections: Section[];
    question: Question;
};