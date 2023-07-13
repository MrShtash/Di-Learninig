PGDMP     !                    {           Scriptum    15.3    15.2 d    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    21354    Scriptum    DATABASE     �   CREATE DATABASE "Scriptum" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = icu LOCALE = 'en_US.UTF-8' ICU_LOCALE = 'en-US';
    DROP DATABASE "Scriptum";
                postgres    false            �            1259    21375    cash    TABLE     W   CREATE TABLE public.cash (
    cash_id integer NOT NULL,
    cash numeric DEFAULT 0
);
    DROP TABLE public.cash;
       public         heap    postgres    false            �            1259    21374    cash_cash_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cash_cash_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.cash_cash_id_seq;
       public          postgres    false    219            �           0    0    cash_cash_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.cash_cash_id_seq OWNED BY public.cash.cash_id;
          public          postgres    false    218            �            1259    21385    category    TABLE     m   CREATE TABLE public.category (
    category_id integer NOT NULL,
    name character varying(255) NOT NULL
);
    DROP TABLE public.category;
       public         heap    postgres    false            �            1259    21384    category_category_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.category_category_id_seq;
       public          postgres    false    221            �           0    0    category_category_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.category_category_id_seq OWNED BY public.category.category_id;
          public          postgres    false    220            �            1259    21430    company    TABLE     �  CREATE TABLE public.company (
    company_id integer NOT NULL,
    name character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    contact_name character varying(255) NOT NULL,
    web_site character varying(255) NOT NULL,
    deposit integer,
    category_id integer,
    description character varying(500) NOT NULL
);
    DROP TABLE public.company;
       public         heap    postgres    false            �            1259    21429    company_company_id_seq    SEQUENCE     �   CREATE SEQUENCE public.company_company_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.company_company_id_seq;
       public          postgres    false    229            �           0    0    company_company_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.company_company_id_seq OWNED BY public.company.company_id;
          public          postgres    false    228            �            1259    21399 
   department    TABLE     s   CREATE TABLE public.department (
    department_id integer NOT NULL,
    d_name character varying(500) NOT NULL
);
    DROP TABLE public.department;
       public         heap    postgres    false            �            1259    21398    department_department_id_seq    SEQUENCE     �   CREATE SEQUENCE public.department_department_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.department_department_id_seq;
       public          postgres    false    225            �           0    0    department_department_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.department_department_id_seq OWNED BY public.department.department_id;
          public          postgres    false    224            �            1259    21356    grade    TABLE     �   CREATE TABLE public.grade (
    grade_id integer NOT NULL,
    grade_type character varying(255) NOT NULL,
    cost numeric(6,2)
);
    DROP TABLE public.grade;
       public         heap    postgres    false            �            1259    21355    grade_id_seq    SEQUENCE     �   CREATE SEQUENCE public.grade_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.grade_id_seq;
       public          postgres    false    215            �           0    0    grade_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.grade_id_seq OWNED BY public.grade.grade_id;
          public          postgres    false    214            �            1259    21392 
   group_data    TABLE     r   CREATE TABLE public.group_data (
    group_id integer NOT NULL,
    group_name character varying(255) NOT NULL
);
    DROP TABLE public.group_data;
       public         heap    postgres    false            �            1259    21391    group_data_group_id_seq    SEQUENCE     �   CREATE SEQUENCE public.group_data_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.group_data_group_id_seq;
       public          postgres    false    223            �           0    0    group_data_group_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.group_data_group_id_seq OWNED BY public.group_data.group_id;
          public          postgres    false    222            �            1259    21363    hour    TABLE     l   CREATE TABLE public.hour (
    hour_id integer NOT NULL,
    hour integer NOT NULL,
    grade_id integer
);
    DROP TABLE public.hour;
       public         heap    postgres    false            �            1259    21362    hour_id_seq    SEQUENCE     �   CREATE SEQUENCE public.hour_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.hour_id_seq;
       public          postgres    false    217            �           0    0    hour_id_seq    SEQUENCE OWNED BY     @   ALTER SEQUENCE public.hour_id_seq OWNED BY public.hour.hour_id;
          public          postgres    false    216            �            1259    21503    project    TABLE       CREATE TABLE public.project (
    project_id integer NOT NULL,
    name character varying(255) NOT NULL,
    company_id integer,
    s_date date DEFAULT CURRENT_DATE,
    e_date date,
    deposit numeric(10,2),
    description character varying(255) NOT NULL
);
    DROP TABLE public.project;
       public         heap    postgres    false            �            1259    21525    project_department    TABLE     ^   CREATE TABLE public.project_department (
    project_id integer,
    department_id integer
);
 &   DROP TABLE public.project_department;
       public         heap    postgres    false            �            1259    21502    project_project_id_seq    SEQUENCE     �   CREATE SEQUENCE public.project_project_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.project_project_id_seq;
       public          postgres    false    233            �           0    0    project_project_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.project_project_id_seq OWNED BY public.project.project_id;
          public          postgres    false    232            �            1259    21512    project_specialist    TABLE     ^   CREATE TABLE public.project_specialist (
    project_id integer,
    specialist_id integer
);
 &   DROP TABLE public.project_specialist;
       public         heap    postgres    false            �            1259    21406 
   specialist    TABLE     �  CREATE TABLE public.specialist (
    specialist_id integer NOT NULL,
    username character varying(500) NOT NULL,
    f_name character varying(500) NOT NULL,
    l_name character varying(500) NOT NULL,
    email character varying(500) NOT NULL,
    password character varying(500) NOT NULL,
    grade_id integer,
    department_id integer,
    group_id integer,
    status character varying(500) NOT NULL
);
    DROP TABLE public.specialist;
       public         heap    postgres    false            �            1259    21405    specialist_specialist_id_seq    SEQUENCE     �   CREATE SEQUENCE public.specialist_specialist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.specialist_specialist_id_seq;
       public          postgres    false    227            �           0    0    specialist_specialist_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.specialist_specialist_id_seq OWNED BY public.specialist.specialist_id;
          public          postgres    false    226            �            1259    21539    sprint    TABLE       CREATE TABLE public.sprint (
    sprint_id integer NOT NULL,
    project_id integer,
    date_start date DEFAULT CURRENT_DATE,
    date_end date,
    deadline date,
    title character varying(255),
    description character varying(500) NOT NULL,
    result character varying(500)
);
    DROP TABLE public.sprint;
       public         heap    postgres    false            �            1259    21553    sprint_specialist    TABLE     \   CREATE TABLE public.sprint_specialist (
    sprint_id integer,
    specialist_id integer
);
 %   DROP TABLE public.sprint_specialist;
       public         heap    postgres    false            �            1259    21538    sprint_sprint_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sprint_sprint_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.sprint_sprint_id_seq;
       public          postgres    false    237            �           0    0    sprint_sprint_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.sprint_sprint_id_seq OWNED BY public.sprint.sprint_id;
          public          postgres    false    236            �            1259    21475    work    TABLE     g  CREATE TABLE public.work (
    work_id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(500) NOT NULL,
    hours integer DEFAULT 0,
    specialist_id integer,
    date_creation date DEFAULT CURRENT_DATE,
    date_complete date,
    deadline date,
    result character varying(500) NOT NULL,
    sprint integer
);
    DROP TABLE public.work;
       public         heap    postgres    false            �            1259    21474    work_work_id_seq    SEQUENCE     �   CREATE SEQUENCE public.work_work_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.work_work_id_seq;
       public          postgres    false    231            �           0    0    work_work_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.work_work_id_seq OWNED BY public.work.work_id;
          public          postgres    false    230            �           2604    21378    cash cash_id    DEFAULT     l   ALTER TABLE ONLY public.cash ALTER COLUMN cash_id SET DEFAULT nextval('public.cash_cash_id_seq'::regclass);
 ;   ALTER TABLE public.cash ALTER COLUMN cash_id DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    21388    category category_id    DEFAULT     |   ALTER TABLE ONLY public.category ALTER COLUMN category_id SET DEFAULT nextval('public.category_category_id_seq'::regclass);
 C   ALTER TABLE public.category ALTER COLUMN category_id DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    21433    company company_id    DEFAULT     x   ALTER TABLE ONLY public.company ALTER COLUMN company_id SET DEFAULT nextval('public.company_company_id_seq'::regclass);
 A   ALTER TABLE public.company ALTER COLUMN company_id DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    21402    department department_id    DEFAULT     �   ALTER TABLE ONLY public.department ALTER COLUMN department_id SET DEFAULT nextval('public.department_department_id_seq'::regclass);
 G   ALTER TABLE public.department ALTER COLUMN department_id DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    21359    grade grade_id    DEFAULT     j   ALTER TABLE ONLY public.grade ALTER COLUMN grade_id SET DEFAULT nextval('public.grade_id_seq'::regclass);
 =   ALTER TABLE public.grade ALTER COLUMN grade_id DROP DEFAULT;
       public          postgres    false    215    214    215            �           2604    21395    group_data group_id    DEFAULT     z   ALTER TABLE ONLY public.group_data ALTER COLUMN group_id SET DEFAULT nextval('public.group_data_group_id_seq'::regclass);
 B   ALTER TABLE public.group_data ALTER COLUMN group_id DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    21366    hour hour_id    DEFAULT     g   ALTER TABLE ONLY public.hour ALTER COLUMN hour_id SET DEFAULT nextval('public.hour_id_seq'::regclass);
 ;   ALTER TABLE public.hour ALTER COLUMN hour_id DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    21506    project project_id    DEFAULT     x   ALTER TABLE ONLY public.project ALTER COLUMN project_id SET DEFAULT nextval('public.project_project_id_seq'::regclass);
 A   ALTER TABLE public.project ALTER COLUMN project_id DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    21409    specialist specialist_id    DEFAULT     �   ALTER TABLE ONLY public.specialist ALTER COLUMN specialist_id SET DEFAULT nextval('public.specialist_specialist_id_seq'::regclass);
 G   ALTER TABLE public.specialist ALTER COLUMN specialist_id DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    21542    sprint sprint_id    DEFAULT     t   ALTER TABLE ONLY public.sprint ALTER COLUMN sprint_id SET DEFAULT nextval('public.sprint_sprint_id_seq'::regclass);
 ?   ALTER TABLE public.sprint ALTER COLUMN sprint_id DROP DEFAULT;
       public          postgres    false    236    237    237            �           2604    21478    work work_id    DEFAULT     l   ALTER TABLE ONLY public.work ALTER COLUMN work_id SET DEFAULT nextval('public.work_work_id_seq'::regclass);
 ;   ALTER TABLE public.work ALTER COLUMN work_id DROP DEFAULT;
       public          postgres    false    231    230    231            �          0    21375    cash 
   TABLE DATA           -   COPY public.cash (cash_id, cash) FROM stdin;
    public          postgres    false    219   Jw       �          0    21385    category 
   TABLE DATA           5   COPY public.category (category_id, name) FROM stdin;
    public          postgres    false    221   rw       �          0    21430    company 
   TABLE DATA           �   COPY public.company (company_id, name, address, email, phone, contact_name, web_site, deposit, category_id, description) FROM stdin;
    public          postgres    false    229   �w       �          0    21399 
   department 
   TABLE DATA           ;   COPY public.department (department_id, d_name) FROM stdin;
    public          postgres    false    225   �x       �          0    21356    grade 
   TABLE DATA           ;   COPY public.grade (grade_id, grade_type, cost) FROM stdin;
    public          postgres    false    215   �x       �          0    21392 
   group_data 
   TABLE DATA           :   COPY public.group_data (group_id, group_name) FROM stdin;
    public          postgres    false    223   *y       �          0    21363    hour 
   TABLE DATA           7   COPY public.hour (hour_id, hour, grade_id) FROM stdin;
    public          postgres    false    217   �y       �          0    21503    project 
   TABLE DATA           e   COPY public.project (project_id, name, company_id, s_date, e_date, deposit, description) FROM stdin;
    public          postgres    false    233   z       �          0    21525    project_department 
   TABLE DATA           G   COPY public.project_department (project_id, department_id) FROM stdin;
    public          postgres    false    235   Sz       �          0    21512    project_specialist 
   TABLE DATA           G   COPY public.project_specialist (project_id, specialist_id) FROM stdin;
    public          postgres    false    234   uz       �          0    21406 
   specialist 
   TABLE DATA           �   COPY public.specialist (specialist_id, username, f_name, l_name, email, password, grade_id, department_id, group_id, status) FROM stdin;
    public          postgres    false    227   �z       �          0    21539    sprint 
   TABLE DATA           s   COPY public.sprint (sprint_id, project_id, date_start, date_end, deadline, title, description, result) FROM stdin;
    public          postgres    false    237   �{       �          0    21553    sprint_specialist 
   TABLE DATA           E   COPY public.sprint_specialist (sprint_id, specialist_id) FROM stdin;
    public          postgres    false    238   |       �          0    21475    work 
   TABLE DATA           �   COPY public.work (work_id, title, description, hours, specialist_id, date_creation, date_complete, deadline, result, sprint) FROM stdin;
    public          postgres    false    231   �|       �           0    0    cash_cash_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.cash_cash_id_seq', 2, true);
          public          postgres    false    218            �           0    0    category_category_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.category_category_id_seq', 3, true);
          public          postgres    false    220            �           0    0    company_company_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.company_company_id_seq', 4, true);
          public          postgres    false    228            �           0    0    department_department_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.department_department_id_seq', 3, true);
          public          postgres    false    224            �           0    0    grade_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.grade_id_seq', 4, true);
          public          postgres    false    214            �           0    0    group_data_group_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.group_data_group_id_seq', 13, true);
          public          postgres    false    222            �           0    0    hour_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.hour_id_seq', 6, true);
          public          postgres    false    216            �           0    0    project_project_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.project_project_id_seq', 29, true);
          public          postgres    false    232            �           0    0    specialist_specialist_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.specialist_specialist_id_seq', 6, true);
          public          postgres    false    226            �           0    0    sprint_sprint_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.sprint_sprint_id_seq', 7, true);
          public          postgres    false    236            �           0    0    work_work_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.work_work_id_seq', 3, true);
          public          postgres    false    230            �           2606    21383    cash cash_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.cash
    ADD CONSTRAINT cash_pkey PRIMARY KEY (cash_id);
 8   ALTER TABLE ONLY public.cash DROP CONSTRAINT cash_pkey;
       public            postgres    false    219            �           2606    21390    category category_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (category_id);
 @   ALTER TABLE ONLY public.category DROP CONSTRAINT category_pkey;
       public            postgres    false    221            �           2606    21437    company company_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.company
    ADD CONSTRAINT company_pkey PRIMARY KEY (company_id);
 >   ALTER TABLE ONLY public.company DROP CONSTRAINT company_pkey;
       public            postgres    false    229            �           2606    21404    department department_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.department
    ADD CONSTRAINT department_pkey PRIMARY KEY (department_id);
 D   ALTER TABLE ONLY public.department DROP CONSTRAINT department_pkey;
       public            postgres    false    225            �           2606    21361    grade grade_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.grade
    ADD CONSTRAINT grade_pkey PRIMARY KEY (grade_id);
 :   ALTER TABLE ONLY public.grade DROP CONSTRAINT grade_pkey;
       public            postgres    false    215            �           2606    21397    group_data group_data_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.group_data
    ADD CONSTRAINT group_data_pkey PRIMARY KEY (group_id);
 D   ALTER TABLE ONLY public.group_data DROP CONSTRAINT group_data_pkey;
       public            postgres    false    223            �           2606    21368    hour hour_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.hour
    ADD CONSTRAINT hour_pkey PRIMARY KEY (hour_id);
 8   ALTER TABLE ONLY public.hour DROP CONSTRAINT hour_pkey;
       public            postgres    false    217            �           2606    21511    project project_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.project
    ADD CONSTRAINT project_pkey PRIMARY KEY (project_id);
 >   ALTER TABLE ONLY public.project DROP CONSTRAINT project_pkey;
       public            postgres    false    233            �           2606    21413    specialist specialist_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.specialist
    ADD CONSTRAINT specialist_pkey PRIMARY KEY (specialist_id);
 D   ALTER TABLE ONLY public.specialist DROP CONSTRAINT specialist_pkey;
       public            postgres    false    227            �           2606    21547    sprint sprint_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.sprint
    ADD CONSTRAINT sprint_pkey PRIMARY KEY (sprint_id);
 <   ALTER TABLE ONLY public.sprint DROP CONSTRAINT sprint_pkey;
       public            postgres    false    237            �           2606    21484    work work_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.work
    ADD CONSTRAINT work_pkey PRIMARY KEY (work_id);
 8   ALTER TABLE ONLY public.work DROP CONSTRAINT work_pkey;
       public            postgres    false    231            �           2606    21438     company company_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.company
    ADD CONSTRAINT company_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(category_id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.company DROP CONSTRAINT company_category_id_fkey;
       public          postgres    false    221    3546    229            �           2606    21369    hour hour_grade_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.hour
    ADD CONSTRAINT hour_grade_id_fkey FOREIGN KEY (grade_id) REFERENCES public.grade(grade_id) ON DELETE CASCADE;
 A   ALTER TABLE ONLY public.hour DROP CONSTRAINT hour_grade_id_fkey;
       public          postgres    false    3540    215    217            �           2606    21533 8   project_department project_department_department_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.project_department
    ADD CONSTRAINT project_department_department_id_fkey FOREIGN KEY (department_id) REFERENCES public.department(department_id);
 b   ALTER TABLE ONLY public.project_department DROP CONSTRAINT project_department_department_id_fkey;
       public          postgres    false    3550    235    225            �           2606    21528 5   project_department project_department_project_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.project_department
    ADD CONSTRAINT project_department_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.project(project_id);
 _   ALTER TABLE ONLY public.project_department DROP CONSTRAINT project_department_project_id_fkey;
       public          postgres    false    235    233    3558            �           2606    21515 5   project_specialist project_specialist_project_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.project_specialist
    ADD CONSTRAINT project_specialist_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.project(project_id);
 _   ALTER TABLE ONLY public.project_specialist DROP CONSTRAINT project_specialist_project_id_fkey;
       public          postgres    false    233    234    3558            �           2606    21520 8   project_specialist project_specialist_specialist_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.project_specialist
    ADD CONSTRAINT project_specialist_specialist_id_fkey FOREIGN KEY (specialist_id) REFERENCES public.specialist(specialist_id);
 b   ALTER TABLE ONLY public.project_specialist DROP CONSTRAINT project_specialist_specialist_id_fkey;
       public          postgres    false    3552    227    234            �           2606    21419 (   specialist specialist_department_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.specialist
    ADD CONSTRAINT specialist_department_id_fkey FOREIGN KEY (department_id) REFERENCES public.department(department_id) ON DELETE CASCADE;
 R   ALTER TABLE ONLY public.specialist DROP CONSTRAINT specialist_department_id_fkey;
       public          postgres    false    3550    227    225            �           2606    21414 #   specialist specialist_grade_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.specialist
    ADD CONSTRAINT specialist_grade_id_fkey FOREIGN KEY (grade_id) REFERENCES public.grade(grade_id) ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.specialist DROP CONSTRAINT specialist_grade_id_fkey;
       public          postgres    false    3540    227    215            �           2606    21424 #   specialist specialist_group_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.specialist
    ADD CONSTRAINT specialist_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.group_data(group_id) ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.specialist DROP CONSTRAINT specialist_group_id_fkey;
       public          postgres    false    223    3548    227            �           2606    21548    sprint sprint_project_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sprint
    ADD CONSTRAINT sprint_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.project(project_id);
 G   ALTER TABLE ONLY public.sprint DROP CONSTRAINT sprint_project_id_fkey;
       public          postgres    false    233    237    3558            �           2606    21561 6   sprint_specialist sprint_specialist_specialist_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sprint_specialist
    ADD CONSTRAINT sprint_specialist_specialist_id_fkey FOREIGN KEY (specialist_id) REFERENCES public.specialist(specialist_id);
 `   ALTER TABLE ONLY public.sprint_specialist DROP CONSTRAINT sprint_specialist_specialist_id_fkey;
       public          postgres    false    238    3552    227            �           2606    21556 2   sprint_specialist sprint_specialist_sprint_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sprint_specialist
    ADD CONSTRAINT sprint_specialist_sprint_id_fkey FOREIGN KEY (sprint_id) REFERENCES public.sprint(sprint_id);
 \   ALTER TABLE ONLY public.sprint_specialist DROP CONSTRAINT sprint_specialist_sprint_id_fkey;
       public          postgres    false    238    3560    237            �           2606    21485    work work_specialist_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.work
    ADD CONSTRAINT work_specialist_id_fkey FOREIGN KEY (specialist_id) REFERENCES public.specialist(specialist_id) ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.work DROP CONSTRAINT work_specialist_id_fkey;
       public          postgres    false    3552    227    231            �      x�3�44 .#NS0���� '�H      �      x�3�t�2�t�2�t����� Q>      �   �   x�U�1O�@F��WLg��B�XF#t&66+7�Fv��.����3�i�z�{��l\p���({��x����)L|ZM�:B�$�e�2Ϡ����Z�S��&uF�a���ɐ0�0���a]������@���n�;�v6���YB��&�-e�Tf&�
���n�����gEc�o4b��%�'��q���V��(��pR;u�.ˤ,Dr/��������+�/�(��9T�8h�m�GiE?��eK      �   C   x�3�tI-K��/�M�+�2�
�J@��4��Ҥ��̤�"��Ԣ����b.cNǔ��<�=... �v�      �   1   x�3��*���/�43�30�2���LI�I� sM8�S���`~� M�      �   �   x�]���0���W�>
>�Uİ@4�����4XmZ��ߺ�q9'������fB�I.�B�QX̠�F�?]��]t��9�I3
.����h�b���L�'�l�\�y
��=Ô�2d	Ť���h�h�E�rr�_I�l���<�h^����[)G{      �      x�3�4�4�2��\f@҄+F��� "B�      �   @   x�34�tIM*M�4�4202�50�5��2́<NCS=�2��Դ��T��Ԝ���T�=... 	�C      �      x�34�4����� ?N      �      x�34�4�24�4����� ��      �   '  x�uPMO�@=�¤g���&��Ī�B#6^��EvIa���w)bL��Ûwx3�7��܂��_���]ƑzRr�P�!�y&5�H�R� �k�,xT�șZz���a(c�0!��l�c�lv׵V���gr�F5�I]w�����%V�:��Hz������xDƣ��gې���z��ܮ&��?X�f�Y��M֬ghM�<9W�co��a�!��mi��ӂ
�o���=��y"g;<��k�S,���|�Y�X���-�k;Hr�|�\92?tMӾ ���      �   �   x�M�A�0E��)� `*�[��[7C;B#NI;@��]�{�%/�V{�*SJs*�������n���sՕȁ�rO m��D�p�J�<O����$�jgk)�l`&+>0�^h.��!>�Q8�p�4��n; yM�g�ǘc}�i��
�?U      �      x�3���21z\\\ ��      �   �   x���MN1�יSxǆAӌDŶ��K�1�ۉH�*����B������Vn;QxN|��L-	�� s����ns��л�-9�S^��Ԗ�"E�w+�?��}�~+��m���1$n/_���Hŭ���PX�r#5>f���S&m�C��y��k+�J�R{4����a*��8s�K���(^�M2�w8�g�u?x�oJ�K��i��x�����|�     