import React, { useState, useEffect } from 'react';
import { Clock, Trash2, Plus } from 'lucide-react';
import { cn } from './CoverEditor';

export interface Project {
  id: string;
  name: string;
  updatedAt: number;
  config: any;
  thumbnail?: string;
}

interface ProjectHistorySidebarProps {
  currentProjectId: string | null;
  onLoadProject: (project: Project) => void;
  onNewProject: () => void;
  projects: Project[];
  onDeleteProject: (id: string) => void;
}

export function ProjectHistorySidebar({
  currentProjectId,
  onLoadProject,
  onNewProject,
  projects,
  onDeleteProject
}: ProjectHistorySidebarProps) {
  return (
    <div className="hidden lg:flex w-[280px] bg-[#141414] border-r border-white/10 flex-col h-full shrink-0 z-20">
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-neutral-300 flex items-center gap-2">
          <Clock size={16} />
          Recent Projects
        </h2>
        <button
          onClick={onNewProject}
          className="p-1.5 hover:bg-white/10 rounded-md text-neutral-400 hover:text-white transition-colors"
          title="New Project"
        >
          <Plus size={16} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {projects.length === 0 ? (
          <div className="text-center text-sm text-neutral-500 mt-8">
            No recent projects
          </div>
        ) : (
          projects.map(project => (
            <div
              key={project.id}
              className={cn(
                "group flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors",
                currentProjectId === project.id ? "bg-white/10" : "hover:bg-white/5"
              )}
              onClick={() => onLoadProject(project)}
            >
              <div className="w-12 h-12 bg-black rounded border border-white/10 overflow-hidden shrink-0 flex items-center justify-center">
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt={project.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-xs text-neutral-600">No Img</div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-neutral-200 truncate">
                  {project.name || 'Untitled Project'}
                </div>
                <div className="text-xs text-neutral-500 mt-0.5">
                  {new Date(project.updatedAt).toLocaleDateString()}
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteProject(project.id);
                }}
                className="p-1.5 text-neutral-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
