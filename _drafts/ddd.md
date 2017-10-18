---
title: Domain Driven Design
layout: post
---

Informal object interaction diagram

- Binding the model and implementation
- Cultivate a concrete language based on the model
- Developing a knowledge-rich model with behavior and enforced rules
- Curating the model / Iteration
- Experimention
- Collaboration
- Abstract principles, capture meaning

Close the feedback loop with technical artifacts

Projects face risk when their language is fractured.

Terminology of daily discussions is disconnected from terminology embedded in the code.

Model-based language should be used to describe system artifacts, tasks and functionality.

Enforce ubiquity of this language.  Grow it over time to capture intricacies.

Prefer concision.

If domain experts don't understand the model, it's wrong.

## Diagrams

Diagrams can show structure, but behavior is difficult.

Diagrams provoke conversation, which conveys meaning and behavior.  Diagrams guide attention.

Vital design detail is captured in code.

The model is not the diagram.

## Written Design Documents

Often fall behind the flow of a project.  Even program comments fall behind.

A document shouldn't reproduce what the code already does.

Requirements, conversation and models should use the same language.

Explanatory models focus on a detail.

# Balance

No domain model and complex domain models can produce similar bloated designs that aren't navigable.

Detachment paralysis.

Analysis models shouldn't be directly implemented.  Their knowledge is lost when coding begins.

Modeling should be constant and disciplined.

Analysis and design should cooccur.  Bind the model and the design, without sacrificing quality.

Code changes should ripple through the project, changing terminology.

# Policy

Policy is another name for the design pattern known as STRATEGY.

Usually motivated by the need to substitute rules.

# Bounded Context

reveal the bones.  don't hide the model, make it appropriate.

Prefer predicable behavior.

Models must be responsive to implmentation.

Learn to express the model through code.

# Domain Isolation

Layered architecture

Buschmann et al. 1996.  Indirect upward communication.  Callbacks and observers.

# Models

Types of model: Entities (Reference Objects), Value Objects, Services

For every traversable association in the model, there is a mechanism in the software with the same properties.

Each concept in the domain model should be reflected in an implementation element.

Make associations directional.

Qualify/constrain relationships.

## Entities

Entities have identity. Attributes vary.

The same entities might be of different class.

Only capture essential attributes.  Attributes can be essential to the concept or behavior of the model.

Language and model identity are different.

Entities tend to fulfull their responsibilities by coordinating the operations of objects they own.

## Value Objects

Value objects don't have identity.  They are their attributes.

Identity tracking has overhead.

Value objects /describe/ things.

Value objects are frequently transient and readily discarded after use.

Avoid complexity and treat values as immutable.

Attributes of value objects should form a conceptual whole.

## Services

Services don't contain state, and they may have side effects.

Services can exist at domain, infrastructure or application layers.  Keep them distinct.

Interact with entities and value objects.

## Modules/Packages

Modules should encapsulate and simplify reasoning with boundaries.

High cohesion, loose coupling.

Frameworks may introduce tiers and artificial partitioning.  These can be useful, but are different.

# Referenences

1. Domain Driven Design.  Evans
1. Design Patterns, GoF Gamma, 1995











