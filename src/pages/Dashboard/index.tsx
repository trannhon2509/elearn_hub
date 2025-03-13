import BannerCarousel from '@/components/banner-carousel'
import { BarChart3, BookOpen, Calendar, GraduationCap } from 'lucide-react'
import React from 'react';
import CardList from './components/CardList'
import ProgressList from './components/ProgressList';

const cardData = [
    {
        title: "Khóa học đang học",
        icon: BookOpen,
        iconClass: "text-mint-400",
        borderClass: "border-t-mint-300",
        value: "4",
        description: "+2 khóa học mới trong tháng này"
    },
    {
        title: "Bài học hoàn thành",
        icon: BarChart3,
        iconClass: "text-coral-400",
        borderClass: "border-t-coral-300",
        value: "24/36",
        description: "67% hoàn thành"
    },
    {
        title: "Giờ học tích lũy",
        icon: Calendar,
        iconClass: "text-periwinkle-400",
        borderClass: "border-t-periwinkle-300",
        value: "48.5",
        description: "+12.5 giờ so với tuần trước"
    },
    {
        title: "Chứng chỉ đạt được",
        icon: GraduationCap,
        iconClass: "text-sand-400",
        borderClass: "border-t-sand-300",
        value: "2",
        description: "1 chứng chỉ sắp hoàn thành"
    }
]

const slides = [
    {
        title: "Chào mừng đến với ABNS Khóa Học!",
        description: "Khám phá các khóa học mới và nâng cao kỹ năng của bạn.",
        content: "Chúng tôi đã cập nhật nội dung mới cho khóa học JavaScript Nâng cao.",
        image: "https://static.careerviet.vn/careerstart/images/elearning/mb-banner-1.jpg",
    },
    {
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f2295e155092089.634e745aa1f30.png",
    },
    {
        image: "https://caodang.fpt.edu.vn/wp-content/uploads/thumbnail_Banner-Web.png",
    },
]

const progressData = [
    { value: 77, title: "Khóa học đang học" },
    { value: 50, title: "Bài học hoàn thành" },
    { value: 30, title: "Giờ học tích lũy" },
    { value: 8, title: "Chứng chỉ đạt được" }
];

const MemoizedBannerCarousel = React.memo(BannerCarousel);
const MemoizedCardList = React.memo(CardList);
const MemoizedProgressList = React.memo(ProgressList);

const Dashboard: React.FC = () => {

    return (
        <div className='flex flex-1 flex-col gap-4 pt-0'>
            <MemoizedBannerCarousel slides={slides} intervalSeconds={10} />
            <MemoizedCardList loading cards={cardData} />
            <MemoizedProgressList progresses={progressData} />
        </div>
    )
}

export default Dashboard