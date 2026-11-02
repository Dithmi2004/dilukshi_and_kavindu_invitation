import React from 'react';
import { wedding } from '../data/wedding';
import { SectionHeading } from './ornaments/SectionHeading';

export function ScheduleTimeline() {
  const { schedule } = wedding;

  return (
    <section aria-labelledby="schedule-title" className="paper-champagne px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading id="schedule-title" title="Order of the Day" />

        <ol className="mt-14">
          {schedule.map((item, i) => {
            const isFirst = i === 0;
            const isLast = i === schedule.length - 1;
            return (
              <li
                key={`${item.time}-${item.title}`}
                className="grid grid-cols-[5.25rem_2rem_1fr] items-center sm:grid-cols-[1fr_3rem_1fr]">
                
                <p
                  className={`py-6 pr-2 text-right font-display text-xs uppercase tracking-[0.14em] sm:pr-4 sm:text-sm sm:tracking-[0.2em] ${
                  item.highlight ? 'text-forest' : 'text-gold-deep'}`
                  }>
                  
                  {item.time}
                </p>

                <div className="relative flex h-full items-center justify-center" aria-hidden="true">
                  <span
                    className={`absolute left-1/2 w-px -translate-x-1/2 bg-gold/50 ${
                    isFirst ? 'top-1/2 bottom-0' : isLast ? 'top-0 bottom-1/2' : 'inset-y-0'}`
                    } />
                  
                  {item.highlight ?
                  <span className="relative flex h-5 w-5 rotate-45 items-center justify-center border border-gold bg-forest">
                      <span className="h-1.5 w-1.5 bg-gold" />
                    </span> :

                  <span className="relative h-2.5 w-2.5 rotate-45 border border-gold bg-champagne" />
                  }
                </div>

                <div className="py-6 pl-2 sm:pl-4">
                  {item.highlight ?
                  <p className="font-script text-[1.9rem] leading-tight text-forest sm:text-4xl">
                      {item.title}
                    </p> :

                  <p className="font-serif text-lg leading-snug text-forest sm:text-xl">
                      {item.title}
                    </p>
                  }
                </div>
              </li>);

          })}
        </ol>
      </div>
    </section>);

}