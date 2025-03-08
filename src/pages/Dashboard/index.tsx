import BannerCarousel from '@/components/banner-carousel'
import { BarChart3, BookOpen, Calendar, GraduationCap } from 'lucide-react'
import React, { useState } from 'react';
import CardList from './components/CardList'
import { Progress } from '@/components/ui/progress'

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

const MemoizedBannerCarousel = React.memo(BannerCarousel);
const MemoizedCardList = React.memo(CardList);

const Dashboard: React.FC = () => {
    const [progress, setProgress] = useState(50);

    const increaseProgress = (amount: number) => {
        setProgress(prev => Math.min(prev + amount, 100));
    };

    return (
        <div className='flex flex-1 flex-col gap-4 pt-0'>
            <MemoizedBannerCarousel slides={slides} intervalSeconds={10} />
            <MemoizedCardList loading cards={cardData} />
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>Tiến độ học tập</h2>
                <Progress value={progress} color='#fdf1d8' />
                <div className="flex gap-2 mt-4">
                    <button onClick={() => increaseProgress(10)} className="btn btn-primary">Tăng 10%</button>
                    <button onClick={() => increaseProgress(20)} className="btn btn-secondary">Tăng 20%</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard