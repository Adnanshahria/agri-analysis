export interface TopicData {
    name: string;
    c22: number;
    c23: number;
    c25: number;
    pred26: number;
    [key: string]: number | string; // For historical university data (bau17, etc.)
}

export interface SubjectData {
    paper1?: TopicData[];
    paper2?: TopicData[];
    grammar?: TopicData[];
    memorizing?: TopicData[];
    insight: string;
}

export interface MarksDistribution {
    [subject: string]: number;
}

export interface OverviewData {
    marks: MarksDistribution;
}

export interface Database {
    overview: OverviewData;
    biology: SubjectData;
    chemistry: SubjectData;
    physics: SubjectData;
    math: SubjectData;
    english: SubjectData;
}
