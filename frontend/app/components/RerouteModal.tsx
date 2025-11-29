"use client";

import React from "react";
import { X, AlertTriangle, Wind, Users, Clock } from "lucide-react";
import { RerouteOption } from "../types";

interface RerouteModalProps {
  isOpen: boolean;
  onClose: () => void;
  options: RerouteOption[];
  onSelectOption: (id: string) => void;
}

export const RerouteModal: React.FC<RerouteModalProps> = ({
  isOpen,
  onClose,
  options,
  onSelectOption,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      {/* 顶部卡片：Transit Update */}
      <div className="relative w-full max-w-3xl mx-4 rounded-3xl bg-white shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[var(--color-primary)] text-white px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xs opacity-80">Transit Update</div>
            <div className="text-sm font-medium">
              Bus 404 is stuck in traffic near KLCC.
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-3 text-sm text-slate-600">
            <AlertTriangle className="w-4 h-4 text-[var(--color-alert)] mt-0.5" />
            <p>
              Your current route has a delay. Choose a backup plan below to keep
              your air quality and stress in check.
            </p>
          </div>

          <div className="grid gap-4">
            {options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => onSelectOption(opt.id)}
                className="w-full text-left rounded-2xl border border-[var(--color-gray-light)] bg-[var(--color-background)] hover:bg-white hover:shadow-md transition flex flex-col md:flex-row gap-3 px-4 py-3"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">
                      {opt.icon === "scooter"
                        ? "🛴"
                        : opt.icon === "bus"
                        ? "🚌"
                        : "🚶"}
                    </span>
                    <span className="font-medium text-sm">{opt.name}</span>
                  </div>
                  <p className="text-xs text-slate-500">{opt.description}</p>
                </div>

                <div className="flex items-center gap-4 text-[11px] text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>+{opt.delay} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{opt.crowdLevel}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wind className="w-3 h-3" />
                    <span>Stress {opt.stressLevel}/10</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-[11px] text-slate-400 text-center">
            We’ll keep your navigation focused on calmer, cleaner options. / 我们会优先选择
            更安静、空气更好的路线～
          </div>
        </div>
      </div>
    </div>
  );
};
