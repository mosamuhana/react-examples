import { PersonCard } from './PersonCard';

export const TwCard = () => {
  return (
    <div className="mt-4 mb-3">
      <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">

        <div
          style={{ backgroundPosition: '10px 10px' }}
          className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
        ></div>

        <div className="relative rounded-xl overflow-auto p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 max-w-lg mx-auto">

            <PersonCard
              dir="ltr"
              title="Left-to-right"
              imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              name="Tom Cook"
              job="Director of Operations"
            />

            <PersonCard
              dir="rtl"
              title="من اليمين للشمال"
              imageUrl="https://images.unsplash.com/photo-1563833717765-00462801314e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              name="تامر كرم"
              job="الرئيس التنفيذي"
            />

          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>

      </div>
    </div>
  );
};
